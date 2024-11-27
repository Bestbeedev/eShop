const generateCustomId=(extension)=>{
    const timestamp=Date.now().toString()
    const randomString=Math.random().toString(36).substring(2, 8)
    return `${extension}-${timestamp}-${randomString}`
}
module.exports=generateCustomId