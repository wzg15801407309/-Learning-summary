
var http = require('http');
var fs = require('fs');
var server = http.createServer();
var wwwUrl = '/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/www/apche-01'
server.on('request', function (req, res) {
  fs.readFile('./template.html', function (err, data) {
    if (err) {
      return res.end('404 Not Found.');
    }

    // 读取文件，目录
    fs.readdir(wwwUrl, function (err, files) {
      if (err) {
        return res.end('404 Not Found.')
      }
      var content = ''
      files.forEach(item => {
        content += `
        <tr>
        <td data-value="apche-01/">
          <a
            class="icon dir"
            href="/Users/zhuqin.wei/Documents/webGitHubProject/notebooks/www/apche-01/"
            >${item}</a
          >
        </td>
        <td class="detailsColumn" data-value="0"></td>
        <td class="detailsColumn" data-value="1607330637">
          2020/12/7 下午4:43:57
        </td>
      </tr>
        `
      });
      data = data.toString();
      data = data.rePlace('^_^', content);
    });
    res.end(data);
  });
});


server.listen(3000, function () {
  console.log('Server is Running!');
})