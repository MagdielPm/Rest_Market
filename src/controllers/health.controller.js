export async function serverRunning(req, res) {
  res.status(200).json({
    message: "Server running",
  });
}
