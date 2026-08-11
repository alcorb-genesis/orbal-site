export default function Maintenance() {
  return (
    <>
      <div style={styles.container}>
        <img src="/maintenance.png" alt="Orbal — Bientôt disponible" style={styles.image} />
      </div>
      <style jsx global>{`
        html, body { margin: 0; padding: 0; background: #000; }
        * { box-sizing: border-box; }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100vh',
    objectFit: 'contain',
    display: 'block',
  },
};
