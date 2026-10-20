import { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export const InteractiveTerminal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      id: 1,
      command: 'sys --status',
      output: (
        <div className="text-[#4edea3]">
          <div>[KERNEL INITIALIZED] Tejas Bhoi Engineer Console v2.4.0</div>
          <div className="text-[#bbcabf]">Type &apos;<span className="text-[#4edea3] font-bold">help</span>&apos; to view available diagnostic directives.</div>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-[#bbcabf]">
            <div>Available directives:</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">whoami</span> - Developer profile &amp; summary</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">skills</span> - Complete technical stack</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">projects</span> - Deployed repositories &amp; architectures</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">experience</span> - Industry tenure &amp; frontend roles</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">education</span> - Academic credentials &amp; CGPA</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">contact</span> - Direct comm channels</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">clear</span> - Clear terminal session buffer</div>
            <div>&nbsp;&nbsp;<span className="text-[#4edea3] font-bold">exit</span> - Close terminal window</div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-[#dae2fd]">
            <div className="text-[#4edea3] font-bold">{PORTFOLIO_DATA.profile.name} — {PORTFOLIO_DATA.profile.role}</div>
            <div className="text-[#bbcabf]">{PORTFOLIO_DATA.profile.bio}</div>
            <div className="text-[11px] text-[#4cd7f6]">Location: {PORTFOLIO_DATA.profile.coordinates}</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-[#bbcabf]">
            <div className="text-[#4edea3] font-bold">Languages:</div>
            <div>&nbsp;&nbsp;JavaScript (ES6+) 92%, Java 85%</div>
            <div className="text-[#4cd7f6] font-bold pt-1">Web &amp; Frameworks:</div>
            <div>&nbsp;&nbsp;React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS</div>
            <div className="text-[#c0c1ff] font-bold pt-1">Databases:</div>
            <div>&nbsp;&nbsp;PostgreSQL, MongoDB, MySQL, Oracle</div>
            <div className="text-[#dae2fd] font-bold pt-1">Tools:</div>
            <div>&nbsp;&nbsp;Git, GitHub, VS Code, REST APIs, Postman</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-[#bbcabf]">
            {PORTFOLIO_DATA.projects.map((p, idx) => (
              <div key={p.id}>
                <span className="text-[#4edea3] font-bold">[{idx + 1}] {p.title}</span>
                <div className="text-[11px]">{p.description}</div>
                <div className="text-[10px] text-[#4cd7f6]">Stack: {p.techStack.join(', ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-1 text-[#bbcabf]">
            <div className="text-[#4edea3] font-bold">
              {PORTFOLIO_DATA.experience.role} @ {PORTFOLIO_DATA.experience.company} ({PORTFOLIO_DATA.experience.period})
            </div>
            {PORTFOLIO_DATA.experience.highlights.map((h, i) => (
              <div key={i}>• {h}</div>
            ))}
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="space-y-1 text-[#bbcabf]">
            <div className="text-[#4edea3] font-bold">{PORTFOLIO_DATA.education.degree}</div>
            <div>{PORTFOLIO_DATA.education.institution} ({PORTFOLIO_DATA.education.period})</div>
            <div className="text-[#c0c1ff]">CGPA: {PORTFOLIO_DATA.education.cgpa}</div>
            <div className="text-[11px]">{PORTFOLIO_DATA.education.coursework}</div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-[#dae2fd]">
            <div>Email: <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="text-[#4edea3] underline">{PORTFOLIO_DATA.profile.email}</a></div>
            <div>Phone: <span className="text-[#4edea3]">{PORTFOLIO_DATA.profile.phone}</span></div>
            <div>GitHub: <a href={PORTFOLIO_DATA.profile.github} target="_blank" rel="noreferrer" className="text-[#4cd7f6] underline">{PORTFOLIO_DATA.profile.github}</a></div>
            <div>LinkedIn: <a href={PORTFOLIO_DATA.profile.linkedin} target="_blank" rel="noreferrer" className="text-[#c0c1ff] underline">{PORTFOLIO_DATA.profile.linkedin}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = (
          <div className="text-[#ffb4ab]">
            Command not recognized: &apos;{cmd}&apos;. Type &apos;<span className="text-[#4edea3]">help</span>&apos; for list of commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now(),
        command: input,
        output,
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1326]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#060e20] max-w-2xl w-full p-6 rounded-xl shadow-2xl flex flex-col gap-4 border border-[#4edea3]/40 font-mono text-xs max-h-[85vh] h-[500px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2d3449]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#ffb4ab] rounded-full inline-block cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 bg-[#c0c1ff] rounded-full inline-block"></span>
            <span className="w-3 h-3 bg-[#4edea3] rounded-full inline-block"></span>
            <span className="text-[#4edea3] ml-2 font-bold">tejas@bhoi-console:~$</span>
          </div>
          <button onClick={onClose} className="text-[#bbcabf] hover:text-[#dae2fd]">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Console Buffer */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-[#dae2fd]">
                <span className="text-[#4edea3] font-bold">tejas@sys:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Line Input */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 border-t border-[#2d3449]">
          <span className="text-[#4edea3] font-bold shrink-0">tejas@sys:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type directive (e.g. help, whoami, skills, projects)..."
            className="flex-1 bg-transparent text-[#dae2fd] focus:outline-none border-none font-mono text-xs"
          />
          <button type="submit" className="text-[#4edea3] text-[11px] px-2 py-1 bg-[#171f33] rounded border border-[#4edea3]/30">
            ENTER
          </button>
        </form>
      </div>
    </div>
  );
};
