var express = require("express");
var router = express.Router();
var AssistantV1 = require("watson-developer-cloud/assistant/v1"); // watson sdk

var assistant = new AssistantV1({
  version: "2018-09-20",
  iam_apikey: "hSDx5JUW15BfMqCmSQmATsdGE4twC5nUZGMQjBfWqXF6",
  url: "https://gateway-lon.watsonplatform.net/assistant/api"
});
var newContext = {
  global: {
    system: {
      turn_count: 1
    }
  }
};
router.post("/", function(req, res, next) {
  var assistantId = process.env.ASSISTANT_ID || "<assistant-id>";
  if (!assistantId || assistantId === "<assistant-id>>") {
    return res.json({
      output: {
        text:
          "Code error"
      }
    });
  }
  var contextWithAcc = req.body.context ? req.body.context : newContext;

  if (req.body.context) {
    contextWithAcc.global.system.turn_count += 1;
  }
  textIn = req.body.msg;

  var payload = {
    workspace_id: "e88e4eb0-874c-4f84-b4a5-37a7118ae70e",
    input: {
      message_type: "text",
      text: textIn,
    }
  };
  assistant.message(payload, function(err, data) {
    if (err) {
      return res.status(err.code || 500).json({ err: err });
    }

    return res.json({success:true,data});
  });
});
module.exports = router;
