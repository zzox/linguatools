const BASE_TEST_URL = 'https://lt-nlgservice.herokuapp.com/rest/english/realise'

export const getSentence = (subject, verb, object, tense = null) => {
    const params = new URLSearchParams()
    params.append('subject', subject)
    params.append('verb', verb)
    params.append('object', object)

    if (tense) {   
        params.append('tense', tense)
    }

    console.log(params.toString())

    return fetch(`${BASE_TEST_URL}?${params.toString()}`)
}
