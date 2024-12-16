export default async function handler(req, res) {
    console.log('Received request:', req.body); // Добавим для отладки

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    // Проверим, что переменные окружения доступны
    console.log('ENV check:', {
        hasToken: !!process.env.TELEGRAM_BOT_TOKEN,
        hasChat: !!process.env.TELEGRAM_CHAT_ID
    });

    const telegramMessage = `
        📨 Новое сообщение!
        
        👤 Имя: ${name}
        📧 Email: ${email}
        📝 Вопрос: ${subject}
        💬 Сообщение: ${message}
  `;

    try {
        const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_BOT_TOKEN}/sendMessage`;
        console.log('Sending to URL:', url);

        const response = await fetch(url, {
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
            const errorData = await response.json();
            console.error('Telegram API error:', errorData);
            throw new Error('Failed to send message to Telegram');
        }

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send message',
            details: error.message
        });
    }
}