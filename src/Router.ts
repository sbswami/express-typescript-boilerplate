import express from "express";
import { List } from "./controllers/list";
import { Login } from "./controllers/login";
import { authenticator } from "./authenticator/Authenticator";

const router = express.Router();

router.get('/', (_, res) => res.send("Hello World!"));

router.get('/login', Login);
router.get('/list', authenticator, List);

export default router;
