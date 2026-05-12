import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.sendFile('style.css', { root: 'public/css' });
    res.sendFile('estacionar.jpg', { root: 'public' });
    res.sendFile('coment.txt', { root: 'public' });
    res.sendFile('script.js', { root: 'public/src' });
});

export default router;