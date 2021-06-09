const BASE_TEST_URL = 'https://lt-nlgservice.herokuapp.com/rest/english/realise'

export const getSentence = (subject, verb, object, tense) => {
    const params = new URLSearchParams()
    params.append('subject', subject)
    params.append('verb', verb)
    params.append('object', object)
    params.append('tense', tense)

    return fetch(`${BASE_TEST_URL}?${params.toString()}`)
}
