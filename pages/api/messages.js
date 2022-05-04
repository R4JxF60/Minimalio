function handler(req, res) {
    res.status(200).json({message: "your message", status: "true"});
}

export default handler;