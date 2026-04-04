"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText } from "lucide-react"

const COMPANY_SIZES = [
  { value: "1-50", label: "1–50 employees" },
  { value: "51-200", label: "51–200 employees" },
  { value: "201-500", label: "201–500 employees" },
  { value: "500+", label: "500+ employees" },
]

const BUDGET_RANGES = [
  { value: "under-10m-ngn", label: "Under ₦10 million" },
  { value: "10m-50m-ngn", label: "₦10 million – ₦50 million" },
  { value: "50m-200m-ngn", label: "₦50 million – ₦200 million" },
  { value: "200m-plus-ngn", label: "₦200 million+" },
  { value: "tbd", label: "To be discussed" },
]

export function RequestProposalDialog() {
  const [open, setOpen] = useState(false)
  const [companyName, setCompanyName] = useState("")
  const [companySize, setCompanySize] = useState("")
  const [projectScope, setProjectScope] = useState("")
  const [timeline, setTimeline] = useState("")
  const [budgetRange, setBudgetRange] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const sizeLabel = COMPANY_SIZES.find((o) => o.value === companySize)?.label ?? companySize
    const budgetLabel = BUDGET_RANGES.find((o) => o.value === budgetRange)?.label ?? budgetRange
    const body = [
      "Proposal request from qhsconsultant.com contact page",
      "",
      `Company name: ${companyName}`,
      `Company size: ${sizeLabel}`,
      `Project scope: ${projectScope}`,
      `Timeline: ${timeline}`,
      `Budget range: ${budgetLabel}`,
    ].join("\n")

    const mailto = `mailto:contact@qhsconsultant.com?subject=${encodeURIComponent("Proposal request")}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setOpen(false)
    setCompanyName("")
    setCompanySize("")
    setProjectScope("")
    setTimeline("")
    setBudgetRange("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="secondary"
          className="w-full border border-border bg-card text-foreground shadow-sm transition-all duration-200 hover:bg-muted motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md sm:w-auto"
        >
          <FileText className="mr-2 h-4 w-4" />
          Request Proposal
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(90vh,640px)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a proposal</DialogTitle>
          <DialogDescription>
            Share a few details so we can respond with a tailored outline. Submitting opens your email
            client with this information addressed to our team.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="proposal-company">Company name</Label>
            <Input
              id="proposal-company"
              name="companyName"
              required
              autoComplete="organization"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Hospital or organisation name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="proposal-size">Company size</Label>
            <select
              id="proposal-size"
              name="companySize"
              required
              value={companySize}
              onChange={(e) => setCompanySize(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select range</option>
              {COMPANY_SIZES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="proposal-scope">Project scope</Label>
            <Textarea
              id="proposal-scope"
              name="projectScope"
              required
              rows={4}
              value={projectScope}
              onChange={(e) => setProjectScope(e.target.value)}
              placeholder="e.g. JCI readiness, quality programme, governance review…"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="proposal-timeline">Timeline</Label>
            <Input
              id="proposal-timeline"
              name="timeline"
              required
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              placeholder="e.g. Start Q2 2026, survey in 12 months"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="proposal-budget">Budget range (Naira)</Label>
            <select
              id="proposal-budget"
              name="budgetRange"
              required
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="">Select range</option>
              {BUDGET_RANGES.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
          <DialogFooter className="gap-2 pt-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Send request
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
