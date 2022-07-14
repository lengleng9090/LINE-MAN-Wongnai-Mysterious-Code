function solveChallenge(){
    let whatIsIt
    const secret = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K"
    const uncoded = Buffer.from(secret, 'base64').toString('utf-8')
    whatIsIt = uncoded.split("").reverse().join("")
    return whatIsIt
}

console.log(`The The answer is "${solveChallenge()}"`)