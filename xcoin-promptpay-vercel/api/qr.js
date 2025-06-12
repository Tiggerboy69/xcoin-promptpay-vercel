import { generatePayload } from 'promptpay-qr';
import qrcode from 'qrcode';

export default async function handler(req, res) {
  const { amount } = req.query;
  const payload = generatePayload('0105562033673', {
    amount: parseFloat(amount || 100)
  });
  const qr = await qrcode.toDataURL(payload);
  res.status(200).json({ qr });
}
