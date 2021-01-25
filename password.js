function password(len, num) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_*&%$!";
  let retVal = "";
  
  for (let i = 0; i < num; i++) {
    for let j = 0; j < len; j++) {
      retVal += charset.chatAt(Math.floor(Math.random() * n ));  
    }
    console.log(retVal);
  }
} 