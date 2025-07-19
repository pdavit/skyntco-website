export default function EmailResponderPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">EmailResponder</h1>
      <p>This is the embedded version of EmailResponder.</p>
      <iframe
        src="https://emailresponder.vercel.app"
        width="100%"
        height="800"
        style={{ border: 'none', borderRadius: '8px' }}
        title="EmailResponder"
      ></iframe>
    </main>
  );
}
