

export function handleJSONfiles() {
    let posts = []
    const fs = require('fs');
    const path = require('path')
    
    const jsonsInDir = fs.readdirSync("./public/posts/empreendimentos").filter(file => path.extname(file) === '.json');
    
    jsonsInDir.forEach(file => {
      const fileData = fs.readFileSync(path.join("./public/posts/empreendimentos", file));
      const json = JSON.parse(fileData.toString());
      posts.push(json)
    });
    return posts
}
