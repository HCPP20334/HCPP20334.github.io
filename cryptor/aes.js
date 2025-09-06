async function generateKey() {
    return await crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );
  }
  
  async function encryptMessage(message, key) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const msgUint8 = new TextEncoder().encode(message);
    const encrypted = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      msgUint8
    );
    return { iv, encrypted: new Uint8Array(encrypted) };
  }
  
  async function decryptMessage(encryptedData, iv, key) {
    const decrypted = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      encryptedData
    );
    return new TextDecoder().decode(decrypted);
  }
  
  const AES = {
    async enc(message, key) {
      const { iv, encrypted } = await encryptMessage(message, key);
      console.log("Зашифрованные данные:", Array.from(encrypted), "IV:", Array.from(iv));
      return { iv, encrypted }; // Возвращаем для использования
    },
    async dec(encrypted, iv, key) {
      const decryptedMessage = await decryptMessage(encrypted, iv, key);
      console.log("Расшифрованное сообщение:", decryptedMessage);
      return decryptedMessage;
    }
  };
  
  // Пример использования
  async function demo() {
    const message = "Hello, World!";
    const key = await generateKey();
  
    // Шифрование
    const { iv, encrypted } = await AES.enc(message, key);
  
    // Расшифровка
    await AES.dec(encrypted, iv, key);
  }
  
  demo().catch(console.error);