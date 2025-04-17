const core = require('@actions/core');
const github = require('@actions/github');
const { execSync } = require('child_process');
const fs = require('fs');
const { Configuration, OpenAIApi } = require("openai");

(async () => {
  try {
    const token = core.getInput("openai_token");
    const config = new Configuration({ apiKey: token });
    const openai = new OpenAIApi(config);

    // Run eslint to get changed files
    const changedFiles = execSync('git diff --name-only HEAD^ HEAD').toString().split('\n').filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

    for (const file of changedFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a senior React developer doing a code review." },
          { role: "user", content: `Review this React code and give feedback:\n\n${content}` }
        ]
      });

      console.log(`💬 Review for ${file}:\n`, response.data.choices[0].message.content);
    }

  } catch (error) {
    core.setFailed(error.message);
  }
})();
