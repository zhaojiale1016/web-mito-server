class sendMessage {
  constructor(data, message) {
    this.data = data;
    this.message = message;
  }
}

class successMessage extends sendMessage {
  constructor(data, message) {
    super(data, message);
    this.status = 200;
  }
}
class errorMessage extends sendMessage {
  constructor(data, message, code = "500") {
    super(data, message);
    this.status = code;
  }
}

module.exports = {
  successMessage,
  errorMessage,
};
