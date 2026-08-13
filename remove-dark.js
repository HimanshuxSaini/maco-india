const fs = require('fs');
const path = require('path');

const srcDir = 'd:/download folder/maco-india/client/src';
// Matches `dark:something`
const pattern = /dark:[a-zA-Z0-9\-\/\[\]\(\)\.\#]+/g;

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

let modifiedCount = 0;

walkSync(srcDir, function(filePath) {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        // Remove dark: classes
        content = content.replace(pattern, '');
        
        // Cleanup extra spaces using string replacements and safe regex
        content = content.replace(/  +/g, ' ');
        content = content.split('className=" "').join('className=""');
        content = content.split("className=' '").join("className=''");
        content = content.split('className={` ').join('className={`');
        content = content.split(' `').join('`');
        content = content.split('` ').join('`');
        content = content.split('className="').join('className="'); // trivial formatting
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated ' + filePath);
            modifiedCount++;
        }
    }
});
console.log('Total files modified: ' + modifiedCount);
