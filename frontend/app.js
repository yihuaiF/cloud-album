App({
  onLaunch: function () {
    const fs = wx.getFileSystemManager();
    const logDirPath = `${wx.env.USER_DATA_PATH}/miniprogramLog`;
    const logFiles = ['log1', 'log2', 'log3'];

    fs.access({
      path: logDirPath,
      success: () => {
        console.log('日志文件夹已存在');
        this.checkAndCreateFiles(fs, logDirPath, logFiles);
      },
      fail: () => {
        console.log('日志文件夹不存在，正在创建...');
        fs.mkdir({
          dirPath: logDirPath,
          success: () => {
            console.log('日志文件夹创建成功');
            this.checkAndCreateFiles(fs, logDirPath, logFiles);
          },
          fail: err => {
            console.error('创建日志文件夹失败', err);
          }
        });
      }
    });
  },
  checkAndCreateFiles: function (fs, logDirPath, logFiles) {
    logFiles.forEach(logFile => {
      const logFilePath = `${logDirPath}/${logFile}`;
      fs.access({
        path: logFilePath,
        success: () => {
          console.log(`${logFile} 文件已存在`);
        },
        fail: () => {
          console.log(`${logFile} 文件不存在，正在创建...`);
          fs.writeFile({
            filePath: logFilePath,
            data: '',
            success: res => {
              console.log(`${logFile} 文件创建成功`);
            },
            fail: err => {
              console.error(`创建 ${logFile} 文件失败`, err);
            }
          });
        }
      });
    });
  }
});