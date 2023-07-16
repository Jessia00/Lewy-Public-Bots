module.exports = {
    apps: [
      {
        name: "LewyMain",
        namespace: "LewyCode",
        script: 'lewy.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Lewy-Bots/LewyCode-Main",
      },
      {
        name: "LewyGuard",
        namespace: "LewyCode",
        script: 'lewy.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Lewy-Bots/LewyCode-Guard",
      },
      {
        name: "LewyDestek",
        namespace: "LewyCode",
        script: 'lewy.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Lewy-Bots/LewyCode-Destek",
      },
    ]
  };