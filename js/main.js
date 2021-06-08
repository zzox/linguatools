import { getSentence } from './requests.js'

;(async () => {
    // build ui
    const form = document.getElementById('submission-form')
    const resultField = document.getElementById('submission-result')
    const errorField = document.getElementById('submission-error')

    const subject = document.getElementById('subject-prompt')
    const verb = document.getElementById('verb-prompt')
    const object = document.getElementById('object-prompt')

    form.onsubmit = async (event) => {
        event.preventDefault()

        const tense = document.querySelector('input[name="tense"]:checked').value
        console.log(tense)

        const res = await getSentence(subject.value, verb.value, object.value, tense)
        console.log(await res.json())

        // scroll to top!
        // handle
            // loading
            // error (scroll to validation?)
            // results
    }
})()
