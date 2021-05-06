const express = require('express')
const router = express.Router();
const messagesHandler = require("../Handlers/chat_messages")


router.post('/Getmesssage', messagesHandler.getallmessages);
router.post('/Message_List', messagesHandler.getMessageList)

module.exports = router;