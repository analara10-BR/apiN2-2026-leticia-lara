export const getInfo = (req, res) => {
  res.json({
    status: "ok",
    mensagem: "API funcionando 🚀",
    projeto: "API N2"
  });
};
