export default function App() {
  const phone = "0142641738"
  const whatsapp = "254142641738"
  const email = "kelvinkisia258@gmail.com"
  const github = "https://github.com/phexion321"
  const waLink = `https://wa.me/${whatsapp}?text=Hi%20Kelvin%20Kisia!%20I%20saw%20your%20portfolio`

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div style={{background:'#0c0a14', color:'#e0e0e0', minHeight:'100vh'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap'); *{font-family:'JetBrains Mono', monospace} button{cursor:pointer} `}</style>

      {/* TOP RIGHT NAV - FIXED */}
      <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 24px', borderBottom:'1px solid #1a1a2e', position:'sticky', top:0, background:'#0c0a14', zIndex:100}}>
        <div style={{color:'#00ff88', fontWeight:800, fontSize:'16px'}}>KISIA \ KELVIN</div>
        
        {/* THESE ARE THE TOP RIGHT LINKS - NOW CLICKABLE */}
        <div style={{display:'flex', gap:'18px', alignItems:'center', fontSize:'12px'}}>
          <button onClick={()=> window.scrollTo({top:0, behavior:'smooth'})} style={{background:'none', border:'none', color:'#00ff88', borderBottom:'2px solid #00ff88', paddingBottom:'2px'}}>Home</button>
          <button onClick={()=> scrollTo('about')} style={{background:'none', border:'none', color:'#888'}}>About</button>
          <button onClick={()=> scrollTo('skills')} style={{background:'none', border:'none', color:'#888'}}>Skills</button>
          <button onClick={()=> scrollTo('experience')} style={{background:'none', border:'none', color:'#888'}}>Experience</button>
          <button onClick={()=> scrollTo('projects')} style={{background:'none', border:'none', color:'#888'}}>Projects</button>
          <button onClick={()=> scrollTo('contact')} style={{background:'none', border:'none', color:'#888'}}>Contact</button>
          
          {/* GITHUB BUTTON - TOP RIGHT */}
          <button onClick={()=> window.open(github, '_blank')} style={{background:'white', color:'black', border:'none', padding:'8px 16px', borderRadius:'20px', fontWeight:700, fontSize:'11px', marginLeft:'8px'}}>
            GitHub ↗
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{textAlign:'center', padding:'80px 20px'}}>
        <h1 style={{fontSize:'70px', fontWeight:800, color:'#00ff88', margin:0, lineHeight:1}}>Kelvin Kisia</h1>
        <p style={{color:'#fff', marginTop:'8px'}}>Full Stack Developer — 1 Year — {phone}</p>
        <div style={{marginTop:'28px', display:'flex', gap:'12px', justifyContent:'center'}}>
          <button onClick={()=> window.open(waLink, '_blank')} style={{background:'#7af8d1', color:'black', padding:'12px 24px', borderRadius:'100px', border:'none', fontWeight:700}}>Let's Connect — WhatsApp {phone}</button>
          <button onClick={()=> window.open(github, '_blank')} style={{border:'1px solid #333', background:'transparent', color:'white', padding:'12px 24px', borderRadius:'100px'}}>View My Work ↗</button>
        </div>
      </div>

      <div id="about" style={{maxWidth:'1000px', margin:'0 auto', padding:'60px 24px', borderTop:'1px solid #111'}}>
        <h2 style={{color:'#00ff88'}}>About Me</h2>
        <p style={{color:'#aaa', fontSize:'13px'}}>I'm Kelvin Kisia from Nairobi.currently a student at  the 
         Multimedia university of kenya pursuing BSC in mathematics and computer science and recently finished my certificite course in full stck software development from the modcom institute of technology  1 Year experience. Phone: {phone}. Email: {email}</p>
      </div>

      <div id="skills" style={{maxWidth:'1000px', margin:'0 auto', padding:'40px 24px', borderTop:'1px solid #111'}}>
        <h2 style={{color:'#00ff88'}}>Skills</h2>
        <p style={{color:'#aaa', fontSize:'13px'}}>React, Next.js, JavaScript, Tailwind, Git, GitHub</p>
      </div>

      <div id="experience" style={{maxWidth:'1000px', margin:'0 auto', padding:'40px 24px', borderTop:'1px solid #111'}}>
        <h2 style={{color:'#00ff88'}}>Experience — 1 Year</h2>
        <p style={{color:'#aaa', fontSize:'13px'}}>2026: Frontend Developer — Freelance — Nairobi</p>
      </div>

      <div id="projects" style={{maxWidth:'1000px', margin:'0 auto', padding:'40px 24px', borderTop:'1px solid #111'}}>
        <h2 style={{color:'#00ff88'}}>Projects</h2>
        <button onClick={()=> window.open(github, '_blank')} style={{background:'#12101f', border:'1px solid #00ff88', color:'#00ff88', padding:'12px 20px', borderRadius:'10px', marginTop:'12px'}}>
          Open My GitHub: github.com/phexion321 ↗
        </button>
      </div>

      <div id="contact" style={{maxWidth:'800px', margin:'0 auto', padding:'60px 24px', borderTop:'1px solid #111', textAlign:'center'}}>
        <h2 style={{color:'#00ff88'}}>Contact — {phone}</h2>
        <p style={{color:'#888', fontSize:'13px'}}>{email} • Nairobi, Kenya</p>
        <div style={{display:'flex', gap:'12px', justifyContent:'center', marginTop:'20px'}}>
          <button onClick={()=> window.open(waLink, '_blank')} style={{background:'#00ff88', color:'black', padding:'14px 28px', borderRadius:'100px', border:'none', fontWeight:700}}>Let's Chat on WhatsApp 💬</button>
          <button onClick={()=> window.location.href = `mailto:${email}`} style={{border:'1px solid #333', background:'transparent', color:'white', padding:'14px 28px', borderRadius:'100px'}}>Email Me</button>
        </div>
      </div>
    </div>
  )
}