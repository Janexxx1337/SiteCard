// pages/api/send-telegram.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    const telegramMessage = `
        📨 Новое сообщение!
        👤 Имя: ${name}
        📧 Email: ${email}
        📝 Вопрос: ${subject}
        💬 Сообщение: ${message}
  `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: telegramMessage,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message to Telegram');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        res.status(500).json({ success: false, error: 'Failed to send message' });
    }
}