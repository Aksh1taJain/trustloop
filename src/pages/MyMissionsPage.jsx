import React, { useEffect, useState } from "react";
import AppShell from "../components/AppShell";
import Topbar from "../components/Topbar";
import { getMissions } from "../services/fetchMissions";

export default function MyMissionsPage() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMissions();
      setMissions(data);
    };

    fetchData();
  }, []);

  return (
    <AppShell role="ngo">
      <Topbar
        title="My Missions"
        subtitle="All missions created using AI and stored in Firebase."
      />

      <div className="p-6 grid gap-4">
        {missions.length === 0 ? (
          <p>No missions found</p>
        ) : (
          missions.map((mission) => (
            <div
              key={mission.id}
              className="p-4 border rounded-xl bg-white shadow-sm"
            >
              <p className="text-sm whitespace-pre-line text-slate-700">
                {mission.content}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {mission.createdAt?.toDate
                  ? mission.createdAt.toDate().toLocaleString()
                  : "No date"}
              </p>
            </div>
          ))
        )}
      </div>
    </AppShell>
  );
}