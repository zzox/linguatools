import { getSentence } from './requests.js'

;(async () => {
    const resultBox = document.getElementById('result-box')
    const form = document.getElementById('submission-form')

    const resultField = document.getElementById('submission-result')
    const errorField = document.getElementById('submission-error')
    const loadingText = document.getElementById('loading-text')

    const subject = document.getElementById('subject-prompt')
    const verb = document.getElementById('verb-prompt')
    const object = document.getElementById('object-prompt')

    const errorTexts = {
        subject: document.getElementById('subject-small'),
        verb: document.getElementById('verb-small'),
        object: document.getElementById('object-small'),
        tense: document.getElementById('tense-small')
    }

    const handleErrors = (errorString) => {
        errorString
            .split('is null.')
            .map(item => item.trim())
            .map(item => {
                item && errorTexts[item] != null ? errorTexts[item].classList.remove('hidden') : null
            })
    }

    // on submitting of the form, we:
    // hide all error texts
    // send our requests to the API.
    // if successful, we display the resulting sentence.
    // if there's an error, we alert the user to which field the error is on.
    form.onsubmit = async (event) => {
        event.preventDefault()

        for (let key in errorTexts) {
            errorTexts[key].classList.add('hidden')
        }

        resultBox.classList.remove('display-none')
        loadingText.classList.remove('display-none')
        errorField.classList.add('display-none')
        resultField.classList.add('display-none')

        try {
            const tense = document.querySelector('input[name="tense"]:checked')
            if (!tense) {
                handleErrors('tense is null.')
                loadingText.classList.add('display-none')
                errorField.classList.remove('display-none')
                resultBox.scrollIntoView({ behavior: 'smooth' })
                return
            }

            const type = document.querySelector('input[name="type"]:checked')

            const response = await getSentence(subject.value, verb.value, object.value, tense.value, type && type.value)
            const result = await response.json()

            resultBox.scrollIntoView({ behavior: 'smooth' })
            loadingText.classList.add('display-none')
            if (result.result === 'OK') {
                resultField.classList.remove('display-none')
                resultField.innerText = result.sentence
            } else {
                handleErrors(result.error_message)
                errorField.classList.remove('display-none')
            }
        } catch (e) {
            console.error(e)
        }
    }
})()
