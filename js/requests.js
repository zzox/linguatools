const BASE_TEST_URL = 'https://lt-nlgservice.herokuapp.com/rest/english/realise'

export const getSentence = (subject, verb, object, tense, type = null) => {
    const params = new URLSearchParams()
    params.append('subject', subject)
    params.append('verb', verb)
    params.append('object', object)
    params.append('tense', tense)

    if (type) {
        params.append('sentencetype', type)
    }

    return fetch(`${BASE_TEST_URL}?${params.toString()}`)
}
