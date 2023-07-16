const mongoose = require("mongoose");
const allah = require("../../../../config.json");

mongoose.connect(allah.Main.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("Database bağlantısı tamamlandı!");
});
mongoose.connection.on("error", () => {
  console.error("[HATA] Database bağlantısı kurulamadı!");
});