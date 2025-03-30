module.exports = {
    apps: [
      {
        name: "zero-server-dev",
        script: "npm",
        args: "run dev",
        watch: true,
        watch_options: {
          ignored: ["node_modules", "logs"],
        },
        env: {
          NODE_ENV: "development",
        },
      },
      {
        name: "zero-server-prod",
        script: "npm",
        args: "run start",
        env: {
          NODE_ENV: "production", 
        },
      },
    ],
  };
  