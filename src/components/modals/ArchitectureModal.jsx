import { useState } from 'react';

export const ArchitectureModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [simState, setSimState] = useState('idle');
  const [selectedCase, setSelectedCase] = useState('Mild Eczema Erythema');

  if (!isOpen) return null;

  const runSimulation = () => {
    setSimState('analyzing');
    setTimeout(() => {
      setSimState('complete');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1326]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#171f33] max-w-3xl w-full p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col gap-6 border border-[#4edea3]/30 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2d3449]/60">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4edea3] font-bold">
            <span className="material-symbols-outlined text-[18px]">account_tree</span>
            <span>SYSTEM_TOPOLOGY // AI SKIN ANALYSIS &amp; DOCTOR ROUTING</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#bbcabf] hover:text-[#dae2fd] p-1 rounded hover:bg-[#222a3d] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-[#2d3449]/40 pb-2">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`font-mono text-xs px-3 py-1.5 rounded transition-colors ${
              activeTab === 'architecture'
                ? 'bg-[#4edea3]/20 text-[#4edea3] font-bold border border-[#4edea3]/40'
                : 'text-[#bbcabf] hover:text-[#dae2fd]'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`font-mono text-xs px-3 py-1.5 rounded transition-colors ${
              activeTab === 'simulator'
                ? 'bg-[#4edea3]/20 text-[#4edea3] font-bold border border-[#4edea3]/40'
                : 'text-[#bbcabf] hover:text-[#dae2fd]'
            }`}
          >
            Live Diagnostics Simulator
          </button>
        </div>

        {activeTab === 'architecture' ? (
          <div className="flex flex-col gap-4 font-mono text-xs text-[#bbcabf] leading-relaxed">
            <div className="p-4 bg-[#131b2e] rounded-lg border border-[#2d3449]/60 space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">01.</span>
                <div>
                  <strong className="text-[#dae2fd]">Ingestion &amp; Image Stream:</strong> High-resolution dermatological photos are captured on React client, converted into base64/blob secure payloads, and authenticated via Google OAuth 2.0 with JWT verification.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#4cd7f6] font-bold">02.</span>
                <div>
                  <strong className="text-[#dae2fd]">Inference Engine:</strong> Transmitted via Node.js / Express microservice to Google Gemini Vision API for multi-spectral severity scoring, lesion classification, and contextual symptom analysis.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c0c1ff] font-bold">03.</span>
                <div>
                  <strong className="text-[#dae2fd]">Geospatial Provider Routing:</strong> Google Maps Places API dynamically locates nearby certified dermatological clinics and matches triage priority based on the diagnostic severity grade.
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#4edea3] font-bold">04.</span>
                <div>
                  <strong className="text-[#dae2fd]">Persistent State:</strong> Patient telemetry, diagnosis logs, encrypted doctor chat sessions, and historical queries are indexed in MongoDB Atlas clusters.
                </div>
              </div>
            </div>

            {/* Architecture Node Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2 text-center">
              <div className="p-3 bg-[#060e20] rounded border border-[#4edea3]/30">
                <span className="text-[10px] text-[#4edea3] block font-bold">CLIENT NODE</span>
                <span className="text-xs text-[#dae2fd]">React + Camera</span>
              </div>
              <div className="p-3 bg-[#060e20] rounded border border-[#2d3449]">
                <span className="text-[10px] text-[#bbcabf] block font-bold">API GATEWAY</span>
                <span className="text-xs text-[#dae2fd]">Express + OAuth 2.0</span>
              </div>
              <div className="p-3 bg-[#060e20] rounded border border-[#4cd7f6]/40">
                <span className="text-[10px] text-[#4cd7f6] block font-bold">MULTIMODAL AI</span>
                <span className="text-xs text-[#dae2fd]">Gemini Vision API</span>
              </div>
              <div className="p-3 bg-[#060e20] rounded border border-[#c0c1ff]/40">
                <span className="text-[10px] text-[#c0c1ff] block font-bold">ROUTING &amp; DB</span>
                <span className="text-xs text-[#dae2fd]">Maps API + MongoDB</span>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Simulator */
          <div className="flex flex-col gap-4 font-mono text-xs">
            <p className="text-[#bbcabf]">
              Simulate patient image ingestion and Gemini multimodal diagnosis classification:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {['Mild Eczema Erythema', 'Benign Pigmented Nevus', 'Contact Dermatitis'].map((caseName) => (
                <button
                  key={caseName}
                  onClick={() => {
                    setSelectedCase(caseName);
                    setSimState('idle');
                  }}
                  className={`p-3 rounded text-left border transition-all ${
                    selectedCase === caseName
                      ? 'bg-[#131b2e] border-[#4edea3] text-[#dae2fd]'
                      : 'bg-[#060e20] border-[#2d3449] text-[#bbcabf] hover:border-[#4edea3]/40'
                  }`}
                >
                  <span className="block font-bold text-xs">{caseName}</span>
                  <span className="text-[10px] text-[#bbcabf]">Sample Test Payload</span>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center p-3 bg-[#060e20] rounded border border-[#2d3449]">
              <span className="text-[#bbcabf]">Active Sample: <strong className="text-[#dae2fd]">{selectedCase}</strong></span>
              <button
                onClick={runSimulation}
                disabled={simState === 'analyzing'}
                className="px-4 py-2 bg-[#4edea3] text-[#003824] font-bold rounded flex items-center gap-1.5 hover:bg-[#10b981] disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[16px]">psychology</span>
                <span>{simState === 'analyzing' ? 'Analyzing via Gemini...' : 'Run Diagnostics'}</span>
              </button>
            </div>

            {simState === 'complete' && (
              <div className="p-4 bg-[#131b2e] rounded border border-[#4edea3]/50 flex flex-col gap-2 animate-fadeIn">
                <div className="flex items-center justify-between text-[#4edea3] font-bold">
                  <span>CONFIDENCE: 96.8%</span>
                  <span>TRIAGE GRADE: LOW-MODERATE</span>
                </div>
                <div className="text-[#dae2fd]">
                  <strong>Primary Assessment:</strong> Visual presentation consistent with {selectedCase}. Recommend mild topical emollient and routine dermatological follow-up.
                </div>
                <div className="text-[#4cd7f6] pt-1">
                  <strong>Matched Nearby Specialists (Pune, MH):</strong> 3 verified clinics located within 4.2 km radius via Google Maps Places API.
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40">
          <span className="font-mono text-[10px] text-[#bbcabf]">STATUS: 200 OK // READY</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-bold rounded hover:bg-[#2d3449] border border-[#2d3449] transition-colors"
          >
            CLOSE_CONSOLE
          </button>
        </div>
      </div>
    </div>
  );
};
