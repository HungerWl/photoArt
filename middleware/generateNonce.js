// middleware/generateNonce.js
export default function (req, res, next) {
    const nonce = Math.random().toString(36).substring(2, 15);
    req.nonce = nonce; // 将 nonce 存储在请求对象中
    next();
}