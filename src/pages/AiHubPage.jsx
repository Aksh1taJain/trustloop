import React, { useState } from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'
import { Sparkles, Zap, ArrowRight, CheckCircle } from 'lucide-react'
import { summarizeNeed, generateMissionDraft } from '../services/geminiService'
import { saveMission } from '../services/missionService'

export default function AiHubPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isGeneratingMission, setIsGeneratingMission] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [inputText, setInputText] = useState('')
  const [aiResult, setAiResult] = useState('')
  const [missionDraft, setMissionDraft] = useState('')

  const handleSummarize = async () => {
    if (!inputText.trim()) return

    setIsAnalyzing(true)
    setShowOutput(false)
    setMissionDraft('')

    try {
      const result = await summarizeNeed(inputText)
      setAiResult(result)
    } catch (error) {
      console.error(error)
      setAiResult('Error generating response')
    }

    setIsAnalyzing(false)
    setShowOutput(true)
  }

  const handleGenerateMission = async () => {
    if (!aiResult.trim()) return

    setIsGeneratingMission(true)

    try {
      const result = await generateMissionDraft(aiResult)
      setMissionDraft(result)
    } catch (error) {
      console.error(error)
      setMissionDraft('Error generating mission draft')
    }

    setIsGeneratingMission(false)
  }

  const handleSaveMission = async () => {
    if (!missionDraft.trim()) return
    await saveMission(missionDraft)
  }

  const handleClear = () => {
    setInputText('')
    setAiResult('')
    setMissionDraft('')
    setShowOutput(false)
  }

  return (
    <AppShell role="ngo">
      <Topbar
        title="AI Hub"
        subtitle="Transform field reports and community needs into structured, execution-ready missions using AI."
        action={
          <button
            onClick={handleSaveMission}
            className="btn-primary"
            disabled={!missionDraft}
          >
            Save Draft to Missions
          </button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_1fr]">
        <SectionCard
          title="Need Summarization"
          subtitle="Paste field reports, survey notes, or community observations."
        >
          <textarea
            className="input min-h-[220px] resize-none font-mono text-sm"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste NGO report here..."
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={handleSummarize}
              className="btn-primary"
              disabled={isAnalyzing}
            >
              <Sparkles size={18} />
              {isAnalyzing ? 'Analyzing...' : 'Summarize Need'}
            </button>

            <button className="btn-secondary" onClick={handleClear}>
              Clear
            </button>
          </div>

          {isAnalyzing && (
            <div className="mt-6 animate-pulse rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600">
                  <Sparkles size={20} className="animate-pulse text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-900">
                    AI Processing
                  </div>
                  <div className="mt-1 text-sm text-brand-600">
                    Analyzing community needs...
                  </div>
                </div>
              </div>
            </div>
          )}

          {showOutput && !isAnalyzing && (
            <div className="mt-6 rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-purple-50 p-6 shadow-lg">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700">
                <Sparkles size={16} />
                AI Output
              </div>

              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <CheckCircle size={14} />
                  Summary
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {aiResult}
                </p>
              </div>
            </div>
          )}
        </SectionCard>

        <SectionCard
          title="Mission Draft Generation"
          subtitle="Turn summarized needs into structured execution-ready missions."
        >
          <div className="rounded-2xl border border-line bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Zap size={14} />
              Generated Mission
            </div>

            <div className="mt-4 text-xl font-bold text-ink">
              AI Generated Mission Draft
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Use the summarized output to create execution-ready missions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleGenerateMission}
                className="btn-primary flex-1 group"
                disabled={isGeneratingMission || !aiResult}
              >
                <Sparkles size={16} />
                {isGeneratingMission ? 'Generating...' : 'Generate Mission Draft'}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={handleSaveMission}
                className="btn-secondary"
                disabled={!missionDraft}
              >
                Save as Draft
              </button>
            </div>

            {missionDraft && (
              <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
                <div className="text-sm font-bold text-brand-900">
                  Generated Mission Draft
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                  {missionDraft}
                </p>
              </div>
            )}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}