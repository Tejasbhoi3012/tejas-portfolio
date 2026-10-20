import { useState } from 'react';

export const DemoModal = ({ type, onClose }) => {
  // Store Rating State
  const [role, setRole] = useState('user');
  const [stores, setStores] = useState([
    { id: '1', name: 'Artisan Cafe & Bakery', category: 'Food & Beverage', rating: 4.8, reviews: 142, address: 'FC Road, Pune' },
    { id: '2', name: 'Apex Tech Hardware Lab', category: 'Electronics', rating: 4.6, reviews: 89, address: 'Kothrud, Pune' },
    { id: '3', name: 'Velvet Horizon Books', category: 'Retail', rating: 4.9, reviews: 210, address: 'Viman Nagar, Pune' },
  ]);
  const [userRating, setUserRating] = useState(5);
  const [userReview, setUserReview] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  // Travel Planner State
  const [destination, setDestination] = useState('Kyoto, Japan');
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState('Moderate');
  const [generating, setGenerating] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  if (!type) return null;

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    setRatingSubmitted(true);
    setTimeout(() => {
      setRatingSubmitted(false);
      setUserReview('');
    }, 2500);
  };

  const handleGeneratePlan = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setItinerary([
        {
          day: 1,
          title: 'Historical Temples & Bamboo Groves',
          spots: ['Arashiyama Bamboo Forest', 'Tenryu-ji Temple', 'Sagano Scenic Railway'],
          estimatedSpend: '$65 USD',
        },
        {
          day: 2,
          title: 'Imperial Culture & Traditional Tea',
          spots: ['Fushimi Inari-Taisha Shrine', 'Gion Historic District', 'Tea Ceremony at Camellia'],
          estimatedSpend: '$85 USD',
        },
        {
          day: 3,
          title: 'Zen Gardens & Golden Pavilion',
          spots: ['Kinkaku-ji (Golden Pavilion)', 'Ryoan-ji Rock Garden', 'Nishiki Market Culinary Tour'],
          estimatedSpend: '$70 USD',
        },
      ]);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0b1326]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#171f33] max-w-3xl w-full p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col gap-6 border border-[#4edea3]/30 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#2d3449]/60">
          <div className="flex items-center gap-2 font-mono text-xs text-[#4edea3] font-bold">
            <span className="material-symbols-outlined text-[18px]">
              {type === 'store_rating' ? 'dataset' : 'explore'}
            </span>
            <span>
              {type === 'store_rating'
                ? 'INTERACTIVE DEMO // STORE RATING SYSTEM [RBAC]'
                : 'INTERACTIVE DEMO // AI TRAVEL PLANNER [GENERATIVE ENGINE]'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#bbcabf] hover:text-[#dae2fd] p-1 rounded hover:bg-[#222a3d] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content for Store Rating */}
        {type === 'store_rating' && (
          <div className="flex flex-col gap-5 font-mono text-xs">
            {/* RBAC Role Switcher */}
            <div className="p-3 bg-[#131b2e] rounded border border-[#2d3449] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[#bbcabf]">
                Switch Active Role:
              </span>
              <div className="flex items-center gap-2">
                {['user', 'owner', 'admin'].map((r) => (
                  <button
                    key={r}
                    onClick={() => setRole(r)}
                    className={`px-3 py-1.5 rounded uppercase tracking-wider font-bold transition-all ${
                      role === r
                        ? 'bg-[#3131c0] text-[#dae2fd] border border-[#c0c1ff]/50'
                        : 'bg-[#060e20] text-[#bbcabf] hover:text-[#dae2fd] border border-[#2d3449]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* View based on RBAC */}
            {role === 'user' && (
              <div className="flex flex-col gap-4">
                <p className="text-[#bbcabf]">
                  Normal User View: Browse rated stores and submit verified rating feedback.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {stores.map((s) => (
                    <div key={s.id} className="p-3 bg-[#060e20] rounded border border-[#2d3449] flex flex-col justify-between gap-2">
                      <div>
                        <span className="font-bold text-[#dae2fd] block">{s.name}</span>
                        <span className="text-[10px] text-[#bbcabf]">{s.category}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/50">
                        <span className="text-[#4edea3] font-bold">★ {s.rating}</span>
                        <span className="text-[10px] text-[#bbcabf]">{s.reviews} reviews</span>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleRatingSubmit} className="p-4 bg-[#131b2e] rounded border border-[#2d3449] flex flex-col gap-3">
                  <span className="font-bold text-[#dae2fd]">Rate Artisan Cafe &amp; Bakery</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#bbcabf]">Rating Score:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setUserRating(star)}
                        className={`text-lg transition-transform ${star <= userRating ? 'text-[#4edea3] scale-110' : 'text-[#2d3449]'}`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    required
                    value={userReview}
                    onChange={(e) => setUserReview(e.target.value)}
                    placeholder="Write honest customer experience..."
                    className="p-2.5 bg-[#060e20] text-[#dae2fd] rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3]"
                  />
                  {ratingSubmitted && (
                    <span className="text-[#4edea3] font-bold">Feedback verified and committed to PostgreSQL DB!</span>
                  )}
                  <button
                    type="submit"
                    className="self-start px-4 py-2 bg-[#4edea3] text-[#003824] font-bold rounded hover:bg-[#10b981]"
                  >
                    Submit Rating
                  </button>
                </form>
              </div>
            )}

            {role === 'owner' && (
              <div className="flex flex-col gap-3 p-4 bg-[#131b2e] rounded border border-[#2d3449]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#c0c1ff]">Store Owner Dashboard: Artisan Cafe</span>
                  <span className="text-[#4edea3]">Status: Verified Merchant</span>
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-[#060e20] rounded text-center border border-[#2d3449]">
                    <span className="text-xl font-bold text-[#4edea3]">4.8 / 5.0</span>
                    <span className="block text-[10px] text-[#bbcabf]">Average Score</span>
                  </div>
                  <div className="p-3 bg-[#060e20] rounded text-center border border-[#2d3449]">
                    <span className="text-xl font-bold text-[#c0c1ff]">142</span>
                    <span className="block text-[10px] text-[#bbcabf]">Total Reviews</span>
                  </div>
                  <div className="p-3 bg-[#060e20] rounded text-center border border-[#2d3449]">
                    <span className="text-xl font-bold text-[#4cd7f6]">98.2%</span>
                    <span className="block text-[10px] text-[#bbcabf]">Satisfaction Index</span>
                  </div>
                </div>
              </div>
            )}

            {role === 'admin' && (
              <div className="flex flex-col gap-3 p-4 bg-[#131b2e] rounded border border-[#2d3449]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#dae2fd]">System Administrator Global Oversight</span>
                  <span className="text-[#4edea3] font-bold">ALL ACCESS GRANTED</span>
                </div>
                <p className="text-[#bbcabf]">
                  SQL Schema: Normalized 3NF (users, stores, ratings, audit_logs) with row-level security policies.
                </p>
                <div className="p-3 bg-[#060e20] rounded font-mono text-[11px] text-[#4edea3] border border-[#2d3449]">
                  SELECT s.name, AVG(r.rating) as avg_score, COUNT(r.id) as total_reviews FROM stores s LEFT JOIN ratings r ON s.id = r.store_id GROUP BY s.id ORDER BY avg_score DESC;
                </div>
              </div>
            )}
          </div>
        )}

        {/* Content for Travel Planner */}
        {type === 'travel_planner' && (
          <div className="flex flex-col gap-5 font-mono text-xs">
            <p className="text-[#bbcabf]">
              Configure constraints and trigger dynamic itinerary synthesis powered by AI logic:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-[#bbcabf] block pb-1">Destination:</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 bg-[#060e20] text-[#dae2fd] rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3]"
                />
              </div>
              <div>
                <label className="text-[#bbcabf] block pb-1">Duration (Days):</label>
                <input
                  type="number"
                  min="1"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full p-2 bg-[#060e20] text-[#dae2fd] rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3]"
                />
              </div>
              <div>
                <label className="text-[#bbcabf] block pb-1">Budget Tier:</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-2 bg-[#060e20] text-[#dae2fd] rounded border border-[#2d3449] focus:outline-none focus:border-[#4edea3]"
                >
                  <option value="Backpacker">Backpacker (Budget)</option>
                  <option value="Moderate">Moderate (Standard)</option>
                  <option value="Luxury">Luxury (Premium)</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGeneratePlan}
              disabled={generating}
              className="px-5 py-3 bg-[#4edea3] text-[#003824] font-bold rounded flex items-center justify-center gap-2 hover:bg-[#10b981] disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[16px]">psychology</span>
              <span>{generating ? 'Synthesizing Dynamic Itinerary...' : 'Generate Itinerary with AI'}</span>
            </button>

            {itinerary && (
              <div className="flex flex-col gap-3 pt-2">
                <span className="font-bold text-[#dae2fd] border-b border-[#2d3449] pb-1">
                  Synthesized Itinerary for {destination} ({days} Days · {budget} Tier):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {itinerary.map((dayPlan) => (
                    <div key={dayPlan.day} className="p-3 bg-[#060e20] rounded border border-[#4edea3]/30 flex flex-col justify-between gap-2">
                      <div>
                        <span className="text-[#4edea3] font-bold block">Day {dayPlan.day}</span>
                        <span className="font-bold text-[#dae2fd] block pt-1">{dayPlan.title}</span>
                        <ul className="list-disc list-inside text-[#bbcabf] text-[11px] pt-2 space-y-1">
                          {dayPlan.spots.map((spot) => (
                            <li key={spot}>{spot}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-[10px] text-[#4cd7f6] pt-2 border-t border-[#2d3449]">
                        Target Budget: {dayPlan.estimatedSpend}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#2d3449]/40">
          <span className="font-mono text-[10px] text-[#bbcabf]">TELEMETRY: SYNCHRONIZED</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#222a3d] text-[#dae2fd] font-mono text-xs font-bold rounded hover:bg-[#2d3449] border border-[#2d3449] transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
