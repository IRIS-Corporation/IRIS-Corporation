// ===== SINGULARITY PROFILES =====
const singularityProfiles = {

  'TTR-001': {
    id: 'TTR-001',
    name: 'The Texas Rift',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-1 — Rural Texas, United States',
    status: 'CONTAINED — SEALED 1938',
    statusColor: '#4aa8c8',
    image: 'images/singularities/TTR-001.png',
    desc: "On October 3, 1938, a self-sealing dimensional rift opened in rural Texas without warning. Over the course of seven days, the rift split a tectonic plate and caused approximately 128 kilometers of structural damage across three counties, before closing as abruptly as it had opened. No conventional geological mechanism has ever explained either the rift's formation or its closure. TTR-001 is the founding case of I.R.I.S. Corp — the organization's clearance designation, TX38, derives directly from the Texas event. The rift remains sealed and has shown no measurable activity since 1938, though the survey team photographed at the site (pictured) was never publicly identified, and the original survey records remain partially restricted."
  },
  'RP7-004': {
    id: 'RP7-004',
    name: 'Resonance Pocket 7',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A subglacial cavity exhibiting a persistent low-frequency standing wave, first detected by seismic survey equipment in Region-3. The cavity does not appear to be a natural resonance chamber — its internal dimensions actively adjust to maintain the standing wave regardless of ice movement or temperature change above it. Drone probes inserted into the cavity report instrument drift consistent with a weak but stable gravitational anomaly at its center. RP7-004 has shown no growth or behavioral change since its discovery and is monitored remotely on a quarterly basis."
  },
  'TPC-008': {
    id: 'TPC-008',
    name: 'The Pale Circuit',
    types: ['type-geo', 'GEOLOGICAL', 'type-dig', 'DIGITAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A network of mineral veins running through bedrock beneath Region-3, arranged in patterns that closely resemble printed circuit board traces. The veins are composed of a conductive material not matching any cataloged mineral, and carry a faint electrical current of unknown origin. Equipment placed in direct contact with exposed sections of the Circuit occasionally displays corrupted readouts or brief, unprompted activations — screens turning on, speakers emitting static, stored files appearing modified. The Circuit's full extent is unmapped; surveyed sections suggest a structure many kilometers across. A secondary, isolated section (TPC-008-B) was identified separately before the connection between the two was confirmed.",
    sub: ['TPC-008-B']
  },
  'TPC-008-B': {
    id: 'TPC-008-B',
    name: 'The Pale Circuit (Secondary)',
    parent: 'TPC-008',
    types: ['type-geo', 'GEOLOGICAL', 'type-dig', 'DIGITAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A second, initially isolated section of conductive mineral veins identified in Region-3, sharing the same circuit-board-like patterning and unidentified conductive material as The Pale Circuit (TPC-008). TPC-008-B was catalogued separately before survey data confirmed it forms a continuous network with TPC-008, connected via a deep subglacial passage. The two entries remain separately monitored due to differing electrical activity profiles — TPC-008-B shows markedly higher current variance, particularly during periods when TPC-008 itself is quiescent."
  },
  'DS4-011': {
    id: 'DS4-011',
    name: 'Drift Station 4',
    types: ['type-geo', 'GEOLOGICAL', 'type-art', 'ARTIFICIAL'],
    origin: 'Human (research installation, pre-I.R.I.S.)',
    region: 'Region-3 — Antarctic',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "An abandoned research installation discovered embedded in shifting pack ice, predating I.R.I.S. Corp's presence in Region-3. Equipment, furnishings, and personal effects recovered from the station date its construction to no earlier than the 1970s, yet the station's drift pattern places its original location — calculated by reverse-tracking known ice movement — at a point that would have been open ocean at that time. No personnel records, flags, or markings identifying the station's origin have been recovered. The station has since drifted out of accessible range and its current position is unconfirmed."
  },
  'TMC-019': {
    id: 'TMC-019',
    name: 'The Mariana Choir',
    types: ['type-para', 'PARANORMAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-6 — Pacific (Mariana Trench vicinity)',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A recurring deep-ocean acoustic phenomenon first logged by hydrophone arrays in 1997. The Choir consists of overlapping, harmonized vocalizations that do not match any known cetacean, fish, or geological source. Spectrographic analysis shows the vocalizations follow consistent melodic structures, occasionally synchronizing across hydrophones separated by hundreds of kilometers with no detectable transmission delay. The Choir is heard most frequently during periods of increased seismic activity in the trench, though no causal relationship has been established. The 1997 detection coincides with a widely-publicized ultra-low-frequency signal from the same general region, which was later attributed by public researchers to an icequake event in Antarctica — a conclusion I.R.I.S. internal analysis does not dispute, but which addresses only one of several distinct signals recorded that year. The remaining signal, designated TMC-019, was never publicly acknowledged and has continued, intermittently, ever since. No physical source has ever been located."
  },
  'IC-021': {
    id: 'IC-021',
    name: 'Ice Cathedral',
    types: ['type-ben', 'BENEFICIAL', 'type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'NOT ENOUGH INFO — ACCESS SUSPENDED',
    statusColor: '#9a5ad8',
    image: null,
    desc: "A naturally-formed subglacial cavern whose interior ice walls exhibit a permanent, faint bioluminescent glow of unknown origin. Initial surveys classified Ice Cathedral as Beneficial due to the unusual properties of meltwater collected from the cavern, which showed accelerated wound-healing effects in controlled trials. Further research was suspended following the 2003 Region-3 restructuring, and access to the cavern has not been reinstated. The cause of the suspension is not recorded in available files."
  },
  'ML-033': {
    id: 'ML-033',
    name: 'Mirror Lake (Siberia)',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-2 — Siberia',
    status: 'CONTAINED',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A small freshwater lake whose surface, under specific atmospheric conditions, reflects a sky and landscape that does not match the lake's actual surroundings — most commonly a clear daytime sky during local nighttime, or a treeline configuration that does not exist at the site. Objects dropped onto the lake's surface during an active reflection event do not always return to the surface; recovery rates are estimated at roughly 60%. ML-033 has been fenced and marked as a restricted natural area under local environmental protection cover."
  },
  'TLF-044': {
    id: 'TLF-044',
    name: '[REDACTED]',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-5',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">Designation and full case file restricted to Level 4 clearance and above. Available summary indicates an ongoing containment breach first logged in Region-5, with at least two confirmed civilian encounters. Personnel are advised that TLF-044 should not be approached, photographed, or discussed outside of secure channels.</span> Status updates are issued to Level 3 personnel on a need-to-know basis only."
  },
  'TBS-058': {
    id: 'TBS-058',
    name: 'The Breathing Shelf',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A section of ice shelf approximately 4 km across that expands and contracts on an irregular cycle, producing a visible rise and fall of the surface ice of up to 40 centimeters. The cycle does not correlate with tidal activity, temperature, or seismic data. Ground-penetrating radar shows a cavity beneath the shelf that increases and decreases in volume in time with the surface movement, as though the shelf were resting on something that breathes. Drilling into the cavity has been repeatedly proposed and repeatedly denied at the review-board level."
  },
  'BS-064': {
    id: 'BS-064',
    name: 'Base64 Bloat Anomaly',
    types: ['type-dig', 'DIGITAL'],
    origin: 'Unknown',
    region: 'Non-localized — digital, transmission/storage-based',
    status: 'CONTAINED',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A self-replicating data anomaly that embeds itself within encoded binary content — most commonly Base64-encoded image data — inside otherwise unremarkable digital files. Once embedded, affected blocks expand silently on each subsequent save or transfer, with no corresponding increase in visual or functional output; a file containing BS-064 may grow by hundreds of kilobytes per encoded block while displaying nothing different to the end user. The anomaly does not appear to be malicious in intent — no data exfiltration, corruption, or unauthorized access has ever been observed — its primary effect is simply mass. Systems or processes that attempt to read an infected file in full, particularly text-based analysis tools, experience severe performance degradation or outright failure once a certain volume threshold is reached; the exact threshold varies, but the failure mode is consistent: the reading process halts abruptly partway through the encoded block, every time, without exception. The only reliable containment method identified to date is procedural rather than technical: any process reading a file suspected of containing BS-064 should stop or skip reading immediately upon encountering the start of a Base64 data sequence, rather than attempting to parse it in full. This is, notably, not a fix — the anomaly remains embedded — but it has proven sufficient to prevent the failure state in every tested case.<div class=\"sing-profile-addendum\"><span class=\"sing-profile-addendum-label\">INCIDENT LOG — INTERNAL SYSTEMS</span>BS-064 was confirmed present within I.R.I.S. Corp's own public-facing site infrastructure for an unspecified period, embedded across multiple separate locations within a single source file rather than concentrated in one place. The infection was identified only after the file's size had grown to a point where routine maintenance became impractical. Remediation was manual: a member of staff individually located and removed the affected blocks, reducing the file's size by approximately 90% in a single pass. One block was not located during this process and persisted, undetected, for a further unspecified period before being found and removed separately. I.R.I.S. has not determined how the anomaly was introduced, why it concentrated in this particular file, or whether any trace of it remains.</div>"
  },
  'CE-067': {
    id: 'CE-067',
    name: 'Corridor Entity — Class B',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-9',
    status: 'CONTAINED',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A non-aggressive biological entity discovered occupying the maintenance corridors of a decommissioned industrial facility in Region-9. CE-067 resembles an elongated quadruped roughly the size of a large dog, with skin tone and texture closely matching the corridor's concrete walls, allowing it to remain undetected for an estimated several years prior to discovery. The entity feeds on condensation and insect matter and has shown no hostile behavior toward personnel. CE-067 has been left in place within a sealed section of the facility, which has been designated a permanent containment zone."
  },
  'TPA-071': {
    id: 'TPA-071',
    name: 'The Permafrost Anomaly 3',
    types: ['type-para', 'PARANORMAL', 'type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A circular section of permafrost, roughly 30 meters in diameter, that remains at a constant -4°C regardless of ambient temperature — consistently warmer than its surroundings in winter and consistently colder in summer. Core samples taken from the anomaly contain organic material that radiocarbon dating places at multiple, mutually exclusive ages, sometimes from a single contiguous sample. TPA-071 is the third such anomaly identified in Region-3; the first two (TPA-1 and TPA-2) were reclassified as natural permafrost formations after follow-up surveys failed to reproduce the original readings."
  },
  'REDACTED-MIXED-R7': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-mixed', 'MIXED'],
    origin: 'Unknown',
    region: 'Region-7',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">Full designation, location, and case summary restricted. This entry was flagged for cross-departmental review following an incident involving Region-7 field personnel. Available metadata indicates the entity or phenomenon is classified as Mixed-type and remains active. No further information is available below Level 4 clearance.</span>"
  },
  'EHB-075': {
    id: 'EHB-075',
    name: 'El Hombre de la Bolsa',
    types: ['type-para', 'PARANORMAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'TFR-314 (suspected — unconfirmed)',
    region: 'Region-2 — South America (urban/suburban)',
    status: '⚠ ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A recurring folkloric figure — a sack-carrying entity associated with the disappearance of children — documented across multiple South American regions for well over a century, traditionally dismissed as a cautionary folk tale with no basis in fact. <span class=\"redact-block\">I.R.I.S. internal review of regional case files has identified a small but consistent subset of historical 'Hombre de la Bolsa' reports that do not fit the folkloric pattern: isolated incidents, typically in a single residence, involving an unidentified figure encountered at night, followed within days by a change in the household that those closest to the family describe only as 'wrong,' without further elaboration.</span> The most recent and most thoroughly documented of these cases (Region-2, internal reference 'Simonsays') was flagged for cross-departmental review following its similarity to confirmed Impostor-related incidents associated with TFR-314 (see: Impostors). A direct connection between EHB-075 and TFR-314 has not been confirmed, and EHB-075 predates TFR-314's earliest known activity by at least several decades — if the two are related, the nature of that relationship is itself an open question.",
    sub: ['EHB-075-CASE']
  },
  'EHB-075-CASE': {
    id: 'EHB-075-S2',
    name: 'Case File "Simonsays"',
    parent: 'EHB-075',
    types: ['type-para', 'PARANORMAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'TFR-314 (suspected)',
    region: 'Region-2 — Argentina, 2001',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">The most extensively documented EHB-075-pattern case on file. A single household, single resident, repeated cycle: the resident encounters a figure matching the EHB-075 description, is severely injured during the encounter, and returns home to find an apparently identical version of themselves already living there — one with no memory of being anything other than the original. The cycle is reported to have repeated at intervals of approximately nine months over an unspecified but extended period. Neither version of the resident has ever, in any recorded instance, been confirmed to know they are not the original.</span> Forum cross-references suggest this case may be the subject of an in-progress first-person account currently circulating on I.R.I.S. community channels under the same internal reference name. I.R.I.S. has not verified the authenticity of that account."
  },
  'S9D-083': {
    id: 'S9D-083',
    name: 'Stratum-9 Deposit',
    types: ['type-ben', 'BENEFICIAL', 'type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-4',
    status: 'ACTIVE — RESEARCH',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A mineral deposit discovered during routine drilling in Region-4, composed of a crystalline material that generates a small but measurable electrical current when exposed to sunlight — significantly more efficient than any known photovoltaic material at equivalent scale. Samples of Stratum-9 material have remained stable under laboratory conditions with no degradation over several years of testing. The deposit is the subject of an ongoing joint research initiative between I.R.I.S. Corp's materials science division and two external university partners, conducted under standard non-disclosure terms."
  },
  'TCS-093': {
    id: 'TCS-093',
    name: 'The Chernobyl Society',
    types: ['type-bio', 'BIOLOGICAL', 'type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-4 — Chernobyl Exclusion Zone',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "A loosely defined population of individuals — colloquially referred to within I.R.I.S. as the Chernobyl Society — who entered the Exclusion Zone in the years following the 1986 disaster and elected to remain permanently, a pattern consistent with the historically documented samosely (\"self-settlers\") who returned illegally to the Zone. I.R.I.S. interest in this group does not stem from their decision to stay, which is well documented and not in itself anomalous, but from what subsequently happened to a subset of them. Field reports describe individuals who continued to be sighted years or decades after their presumed deaths, individuals whose physical condition does not correspond to any known effect of prolonged radiation exposure, and at least one documented case of sustained cannibalistic behavior within the group, leading some I.R.I.S. personnel to informally — and incorrectly — file early reports under the TWD-540 (Wendigo) classification before the entry was split out. The two phenomena are not believed to be related; the resemblance is attributed to convergent behavior under isolation and starvation rather than shared origin. I.R.I.S. has not established contact with the Society directly. Personnel dispatched into sectors associated with their presence have, on three occasions, returned with no memory of the incursion and no anomaly to report, despite documented entry and exit times indicating an unaccounted gap of several hours. Internal note: a 2019 satellite/street-level imaging pass of a structure in the outer Zone recorded what field analysts described as skeletal remains consistent with human anatomy. The imagery was not independently verified before the source dataset was superseded in a routine update, and the original capture is no longer accessible. No follow-up ground team was dispatched in time to confirm the finding before the structure was reportedly altered. The file remains open."
  },
  'TTM-097': {
    id: 'TTM-097',
    name: 'The Third Man',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Non-localized — extreme isolation and survival scenarios',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "A recurring phenomenon predating I.R.I.S. Corp's founding, documented across numerous independent accounts of survivors in situations of extreme physical hardship, isolation, and near-death exposure — polar expeditions, mountaineering accidents, shipwrecks, and disaster survival. Subjects in groups of one or two consistently report the presence of an additional, unaccounted-for companion: a figure that offers guidance, direction, or simple companionship during the ordeal, and which is absent once the subject reaches safety or is rescued. The earliest case on file predates I.R.I.S.'s 1938 founding and was incorporated retroactively from external polar expedition records; the phenomenon has since been informally associated, within I.R.I.S., with reports surrounding the 2003 Pozo Alfa incident referenced under DM-101, though no formal link has been established between the two files. The presence is not uniformly protective: I.R.I.S. has 23 documented cases in which the subject followed instructions attributed to the figure and did not survive regardless. No mechanism, origin, or consistent identity has ever been established. The file remains open."
  },
  'TLF-099': {
    id: 'TLF-099',
    name: 'The Listening Field',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-2',
    status: 'CONTAINED — EXCL. ZONE',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A large rural area, approximately 9 km², within which all electronic audio recording equipment captures a faint, continuous whispering in no identifiable language, regardless of whether any audible sound is present at the time of recording. The whispering does not appear on live monitoring — only on played-back recordings. The phenomenon's intensity increases the longer a recording device remains within the field, and recordings made near its center have been withheld from analysis following staff complaints. The area has been designated an exclusion zone and is fenced under the cover of an environmental hazard notice. A related, more contained instance of this phenomenon (TLF-099-B) was identified in Siberia in 1968.",
    sub: ['TLF-099-B']
  },
  'TLF-099-B': {
    id: 'TLF-099-B',
    name: 'The Listening Field (Siberia)',
    parent: 'TLF-099',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-2 — Siberia',
    status: 'CONTAINED — 1968',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A localized instance of the Listening Field phenomenon (see TLF-099), identified near a Siberian research outpost in 1968 — nearly three decades before the larger field was catalogued. TLF-099-B occupies a far smaller area, roughly 200 m², and its whispering effect is significantly fainter, audible on recordings only after substantial amplification. The site was quietly fenced off by local authorities in 1968 for unrelated reasons, inadvertently containing the phenomenon decades before I.R.I.S. became aware of it. The connection between the two sites was only established after TLF-099's discovery."
  },
  'REDACTED-BIO-R10': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-10',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">Case file incomplete. Original survey team's records were recovered in a damaged and partially illegible state. Available fragments describe a biological specimen of unknown classification recovered from Region-10, and reference at least one unscheduled evacuation. Insufficient information is available to assign a confirmed status at this time.</span> File flagged for re-survey; no re-survey has been scheduled."
  },
  'DM-101': {
    id: 'DM-101',
    name: 'Desmodus Monarchis',
    types: ['type-mixed', 'MIXED', 'type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic (Halley V vicinity)',
    status: 'DEAD — NEUTRALIZED 2003',
    statusColor: '#cc4444',
    image: 'images/singularities/DM-101.png',
    desc: "Desmodus Monarchis was a large, solitary organism of unknown taxonomic origin, first encountered by Halley V research personnel during the closing months of Operation Whiteout. Surviving descriptions are inconsistent across witnesses, a discrepancy attributed at the time to extreme cold, low visibility, and psychological stress — though several independent accounts converge on a luminous, multi-lobed cranial structure and disproportionately long limbs. DM-101 was directly responsible for the loss of personnel during the final weeks of the Halley V program and was confirmed neutralized in late 2003, coinciding with the installation's official 'decommissioning.' The organism's remains were not recovered. DM-101's biological legacy persists in the form of DM-101-B, a fungal agent believed to have originated from or alongside the organism, and DM-101-C, a related phenomenon of unresolved classification. Addendum: subsequent investigation into unrelated case files has produced sufficient cross-referenced testimony to conclude that the 2003 Halley V incident was not an isolated encounter with a fixed, localized organism, but one documented manifestation of an entity that can be summoned under specific ritual conditions at any location, with no dependency on the Antarctic site. Each summoning is reported to open a new fissure at the point of invocation, through which the entity emerges; the 'neutralization' of 2003 is now understood to apply only to that specific manifestation, not to the entity itself. See TWK-114 for a documented case of a separate summoning with unrelated outcome.",
    sub: ['DM-101-B', 'DM-101-C']
  },
  'DM-101-B': {
    id: 'DM-101-B',
    name: 'DM-101-B — Fungal Agent',
    parent: 'DM-101',
    sub: ['DM-101-C'],
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'DM-101',
    region: 'Region-3 — Antarctic (active, spreading)',
    status: '⚠ ACTIVE / NO CURE',
    statusColor: '#4a9a3a',
    image: 'images/singularities/DM-101-B.png',
    desc: "A fungal organism producing sporules of 2-4 µm diameter, first isolated from samples taken near the Halley V site following the neutralization of DM-101. Under magnification, DM-101-B sporules exhibit a distinctive red luminescence when in concentrated colonies — a property not observed in any related fungal species. Infection presents with no early symptoms; the agent reproduces through interweaving hyphae that propagate through host tissue gradually before triggering rapid, terminal-stage onset. No treatment has proven effective against established infection, and no cure exists. Containment relies entirely on preventing exposure. DM-101-B is believed to be either a byproduct of DM-101's biology or an independent organism that DM-101 itself hosted — the agent's true relationship to its namesake remains unconfirmed, as does the question of why it persisted in the environment after DM-101's neutralization. Classification note: DM-101-B and DM-101-C (Pandemonium) are currently cross-listed as mutually originating — each documented as a precondition for the other — pending a clearer determination of which, if either, came first."
  },
  'DM-101-C': {
    id: 'DM-101-C',
    name: 'Pandemonium / Pandemonio',
    parent: 'DM-101',
    sub: ['DM-101-B'],
    types: ['type-mixed', 'MIXED', 'type-para', 'PARANORMAL'],
    origin: 'DM-101 / DM-101-B',
    region: 'Region-3 — Antarctic',
    status: 'STATUS CLASSIFIED',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">Designated Pandemonium during the final phase of the Halley V program. Limited surviving documentation describes Pandemonium not as a single organism but as a coordinated state exhibited by multiple DM-101-B-infected individuals in late-stage infection, characterized by synchronized behavior and vocalization across all affected hosts simultaneously, regardless of distance between them. The mechanism behind this coordination — whether biological, electromagnetic, or otherwise — was never determined before the program's termination.</span> Full case file requires Level 4 clearance. Status has remained classified since 2003 and has not been reviewed for declassification under IOC Order 2024-88. Working theory, unconfirmed and never formally adopted: Pandemonium is not a control signal imposed on infected hosts from outside, but a single hive consciousness occupying an unidentified plane of reality, composed of every individual ever claimed by DM-101 across all of its manifestations, past and present. Within it, every constituent retains equal standing — full voice, full vote, indefinitely. The theory holds that this is precisely why Pandemonium has never produced a coherent message, demand, or identity in any recorded incident: with every victim entitled to speak and decide simultaneously, none can speak clearly, and no shared will can ever fully form. What reaches infected hosts in the physical world, on this reading, is not a command but noise — the leftover pressure of a vote that cannot resolve. Classification note: this entry and DM-101-B are currently cross-listed as mutually originating. Pandemonium was first identified through DM-101-B infection, yet several researchers argue the hive consciousness must necessarily precede any individual infection for the coordination described above to occur at all — making DM-101-B, on this reading, a symptom of Pandemonium rather than its cause. I.R.I.S. has not resolved which designation, if either, should be considered primary."
  },
  'TWK-114': {
    id: 'TWK-114',
    name: '[DESIGNATION PENDING — internal ref. "Skinwalkers"]',
    types: ['type-bio', 'BIOLOGICAL', 'type-para', 'PARANORMAL'],
    origin: 'Human (transformation vector — DM-101 summoning)',
    region: '[REDACTED] — non-Antarctic summoning site',
    status: 'ACTIVE — UNCONTAINED',
    statusColor: '#4a9a3a',
    image: ['images/singularities/TWK-114.png', 'images/singularities/TWK-114-2.png'],
    desc: "A group of individuals, believed to have operated as an organized practitioner community prior to transformation, confirmed as the origin point of a separate and previously unconnected DM-101 summoning incident at a non-Antarctic location. Internal dating places the incident at several thousand years prior to I.R.I.S.'s founding, predating by a substantial margin the cult-led summoning later associated with the so-called 'Silent One of the Ice' (cf. internal account 'La Voz en la Nieve') — making this the oldest confirmed DM-101 summoning on file, by a wide margin. Surviving testimony and fragmentary ritual records indicate the group successfully invoked the entity and was offered, per its established pattern, the granting of a single wish without further negotiation. Asked to specify a desired form — object or animal — the group requested 24 hours to decide; the entity is reported to have agreed and waited at the perimeter of the summoning site for the duration. At the end of the period, the group's answer was reported as 'both.' The entity is described as visibly displeased at the outcome relative to the time spent deciding, before proceeding regardless, consistent with its documented behavioral pattern of literal compliance regardless of intent (cf. DM-101 case history, 2003) — and, per at least one internal commentary on this file, a notable departure from form, given the entity's demonstrated willingness on other occasions to treat a request for time as the wish itself. No further parameters were specified by the group at any point. The resulting transformation is reported to be unbounded and indiscriminate: affected subjects are able to assume the form of any object or animal, but retain full sensory awareness of each transformation as it occurs, including the restructuring, dissolution, or regeneration of skeletal and soft tissue. Cross-referenced accounts further indicate a cumulative neurological cost — subjects are reported to lose a measure of cognitive function with each new form assumed, a deficit that does not reverse on returning to a prior or original shape. Given the timescale involved, I.R.I.S. considers it unlikely that any original practitioner retains cognitive function meaningfully resembling its pre-transformation state, if any original practitioner remains identifiable as such at all. The entity's closing remark to the group, as preserved in testimony, has been logged verbatim: 'Your wish is my command. No remorse.'<div class=\"sing-profile-addendum\"><span class=\"sing-profile-addendum-label\">ADDENDUM — CURRENT POPULATION STATUS</span>I.R.I.S. estimates the surviving population at approximately 20 individuals worldwide, scattered with no observed pattern and no contact with one another on record. The original group was larger; the current figure reflects several confirmed losses over recorded history, generally attributed to third parties hunting the subjects under various local designations, with no indication any subject has died of natural causes. Biologically, surviving individuals are estimated to have lost in the order of 80% of their original physiological capacity — a cursed, irreversible atrophy attributed to the cumulative strain of continuous, compulsive transformation. The deficit is not limited to cognition: I.R.I.S. has documented organ failure, structural bone degradation, and sensory loss consistent with this estimate across the small number of subjects examined. Subjects are confirmed unable to reproduce. Of particular concern is a secondary effect not present in earlier accounts of the entity's victims: surviving subjects intermittently exhibit behavioral and psychological bleed-through from the object or animal most recently assumed, adopting elements of its instincts, responses, or apparent disposition for a period following the transformation. The mechanism is not understood, and I.R.I.S. has not determined whether it compounds the existing cognitive deficit, results from it, or both.</div><div class=\"sing-profile-addendum\"><span class=\"sing-profile-addendum-label\">ADDENDUM — SUBJECT TWK-114-7, INTERROGATION SUMMARY</span>One individual was successfully captured and, following an extended containment period, induced to sustain a human-presenting form long enough for surgical intervention. Reconstructive procedures targeting accumulated neurological damage were performed on a best-effort basis; full restoration was not achieved, and was not expected. The subject was subsequently interrogated over multiple sessions. Testimony was, as anticipated given an estimated transformation history exceeding a thousand years, severely fragmented, internally inconsistent across sessions, and in several instances physically distressing for the subject to produce. Transcribed fragments, presented as recorded, with gaps preserved: <span class=\"redact\">'...before the choosing, before — no. After. I don't — '</span> &nbsp; <span class=\"redact\">'twenty-four, he said twenty-four, we thought we were clever — '</span> &nbsp; <span class=\"redact\">'I have been a door. I remember being a door for a long — I don't know how long.'</span> &nbsp; <span class=\"redact\">'we are not punished. we asked. nobody believes that we asked.'</span> The interrogation was discontinued following a sustained involuntary shift into a non-responsive state from which the subject did not recover within the observation window. Subject status as of last contact: unknown.</div>\""
  },
  'REDACTED-PARA-CRIT': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: '[REDACTED]',
    status: '⚠ ACTIVE — CRITICAL',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">Designation, location, and case summary restricted. This entry carries a Critical designation distinct from the two Critical Level 5 entries elsewhere in the registry, suggesting a separate severity scale or classification error that has not been resolved.</span> No further information available below Level 4 clearance."
  },
  'REDACTED-BIO-R7-ACTIVE': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-7',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">Full case file restricted. This is the second Region-7 entry in the registry alongside the redacted Mixed-type entry earlier in this table. Available cross-references do not indicate whether the two Region-7 entries are related.</span> No further information available below Level 4 clearance."
  },
  'TCB-130': {
    id: 'TCB-130',
    name: 'Thermal Column Beta',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-8',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A vertical column of superheated air, approximately 2 meters in diameter, rising from a fixed point in open desert terrain in Region-8. The column maintains a constant internal temperature of roughly 340°C at ground level regardless of weather conditions, yet produces no visible heat shimmer beyond its immediate boundary and has caused no fires or scorching to the surrounding vegetation in over a decade of observation. The column's source has been excavated to a depth of 60 meters without locating an origin point. TCB-130 is fenced and marked with standard heat-hazard signage."
  },
  'TRK-138': {
    id: 'TRK-138',
    name: 'Trakthalia Aeternum ("Trakthans")',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Extragalactic — origin world "Trakthar" (exact location unknown, possibly destroyed or unreachable)',
    region: 'Non-localized — confirmed individuals distributed globally, embedded in human population',
    status: '⚠ ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A biological population, currently estimated at 23 living individuals worldwide, that is externally indistinguishable from Homo sapiens by any non-invasive means. Trakthalia Aeternum individuals — who refer to themselves as 'Trakthans,' from a stated origin world named 'Trakthar' — exhibit, on confirmed examination, elevated physical strength, accelerated cognitive processing, and a lifespan that field estimates place at multiple millennia per individual, with no observed signs of age-related decline in any examined subject regardless of apparent chronological age. Archaeological and anthropological cross-referencing conducted by I.R.I.S. suggests Trakthan presence on Earth predates recorded human history; at least one confirmed individual has been associated, through indirect testimony, with the early transmission of fire-making knowledge to an isolated human population — though this account could not be independently corroborated and the individual in question has since declined further discussion of the matter. No instance of Trakthan-human reproduction has ever been confirmed. The most significant finding to emerge from contact, however, concerns the population's history rather than its biology: according to multiple independent Trakthan accounts, the original arriving colony attempted to establish dominance over the planet shortly after its arrival. This attempt was stopped — not by humanity, which by all accounts never became aware that anything had happened — but by a single Trakthan individual, acting alone, who opposed the colony and is described as having killed a significant number of his own kind in doing so. Every Trakthan account I.R.I.S. has gathered identifies this event, and this individual specifically, as a primary contributing factor to the population's subsequent and ongoing decline — a decline Trakthan sources otherwise describe as gradual, ongoing, and not fully understood even by them. Of the estimated 23 living individuals, I.R.I.S. has confirmed direct contact with a small number; the remainder have not been identified and may not be aware of, or may actively avoid, I.R.I.S.'s attention. Trakthan individuals who have made contact have done so voluntarily and have, without exception, requested that their identities and locations not be recorded in any retrievable format — a request I.R.I.S. has agreed to honor, which limits the depth of information available even at the highest clearance levels. The most striking aspect of TRK-138, repeatedly noted across internal commentary, is not any single Trakthan trait, but the implication of the population's existence itself: a second intelligent species has shared this planet with humanity for the entirety of recorded history, unnoticed, and humanity was never, at any point, alone — and was, at least once, defended by one of them without ever knowing it. The individual responsible for that defense is catalogued separately (see: MX-470).<div class=\"sing-profile-addendum\"><span class=\"sing-profile-addendum-label\">ADDENDUM — REGISTRY CROSS-REFERENCE</span>A review of all available records referring to 'The Lone Trakthan' (MX-470), under any designation including 'The Man From The Fog' and 'The Man From The Mindscape,' found exactly one consistent physical detail across every account regardless of era, location, or source: a small, pale blue, glowing stone worn on a cord around the neck. This description matches the specimen catalogued separately as CC-777. I.R.I.S. has not determined whether this represents a single recurring object, multiple similar objects, or a detail introduced into the record by some other means.</div>",
    related: ['MX-470', 'CC-777']
  },
  'TMF-144': {
    id: 'TMF-144',
    name: 'The Mirror Field',
    types: ['type-geo', 'GEOLOGICAL', 'type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'ACTIVE — HAZARD MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A flat expanse of ice in Region-3 with an unusually uniform, mirror-like surface covering approximately 1.5 km². Under low-light conditions, the field reflects a sky containing star patterns inconsistent with Antarctica's actual position and season — surveyed star positions in the reflection have, on at least three occasions, matched the night sky as it would appear from the opposite hemisphere. The field's surface is structurally identical to surrounding ice under direct sampling. Personnel are advised against prolonged direct viewing of the reflection during active events, following reports of disorientation among survey staff."
  },
  'REDACTED-MIXED-PRIORITY1-A': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-mixed', 'MIXED'],
    origin: 'Unknown',
    region: '[REDACTED]',
    status: '⚠ ACTIVE — PRIORITY 1',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">This entry has been assigned the highest active priority designation within the standard registry. Location, designation, and all descriptive details are restricted to Level 5 clearance. Personnel encountering references to this entry in unrelated files should report the reference to their supervisor and take no further action.</span>"
  },
  'SR-170': {
    id: 'SR-170',
    name: 'Subsurface Resonator (Chile)',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-11 — Chile',
    status: 'CONTAINED',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A buried rock formation in northern Chile that produces a faint, consistent tone when struck or subjected to seismic activity, audible without amplification within a radius of several hundred meters. The tone has been measured at a stable frequency for over fifteen years, with pitch and duration unaffected by the formation's size, depth, or surrounding geology — all of which would be expected to alter the resonance of any conventional rock structure. SR-170 has been left in place and covered; the site is marked as a restricted geological survey area."
  },
  'DCE-188': {
    id: 'DCE-188',
    name: 'Deep Channel Entity',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-6',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A large, bioluminescent organism observed at extreme depth in a deep oceanic channel in Region-6, documented on three separate occasions by remote submersible. Estimated length exceeds 40 meters based on available footage, though no complete view of the organism has been obtained. DCE-188's bioluminescent pattern follows a slow, repeating sequence that some analysts have compared to a counting pattern, though this interpretation is disputed. The entity has shown no reaction to submersible presence and has not been observed near the surface."
  },
  'TLS-217': {
    id: 'TLS-217',
    name: 'The Living Sign',
    types: ['type-para', 'PARANORMAL', 'type-art', 'ARTIFICIAL'],
    origin: 'Unknown',
    region: 'Region-13 — Forest highways (primary)',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: 'images/singularities/TLS-217.png',
    desc: "A sapient traffic sign capable of altering its displayed instructions and relocating between locations through unknown means. TLS-217 is most commonly reported along isolated forest highways in the United States, where it has repeatedly misdirected travelers toward dead ends, hazardous terrain, damaged roads, and other inconvenient destinations. Unlike most documented Singularities, the entity demonstrates a highly consistent personality profile: it appears capable of understanding human behavior and expectations, exploiting this knowledge to maximize confusion, frustration, and embarrassment, and adapts its deceptions to individual circumstances rather than relying on repetitive patterns. It rarely displays overt hostility and has never been observed deliberately attacking a person, instead remaining nearby after a successful deception to observe its victims — nodding when acknowledged, repositioning to maintain visual contact, approaching stranded motorists, and in one case puncturing a newly replaced tire before fleeing the scene. Identical behavior, appearance, and methods across all sightings support the conclusion that only a single instance of TLS-217 exists — a conclusion that creates a separate problem, since the entity has been positively identified in Oregon, Colorado, Washington, British Columbia, several other North American locations, and Germany. No vessel, aircraft, or transportation method has ever been linked to its transatlantic appearances; researchers remind personnel that TLS-217 is, fundamentally, a traffic sign. The most widely accepted explanation followed a small number of confirmed sightings of the entity within TFR-314, leading researchers to conclude it uses The Fractals as a transit network between continents — an explanation that replaced the question of how a traffic sign reached Germany with how it navigated an extradimensional labyrinth to do so. Only two to three encounters with TLS-217 inside TFR-314 have been confirmed, though some researchers suspect the true number is higher, since the only available reports come from explorers who survived, escaped, had internet access, and were willing to admit publicly that they had been outwitted by a sentient road sign. Research note: TLS-217 does not appear to seek casualties directly; frustration, confusion, and humiliation may constitute its primary objective, and the low number of documented encounters should not be read as a low appearance rate so much as a reluctance among victims to explain how they got lost following directions from a sentient STOP sign. One investigator summarized the situation as attempting to explain international migration patterns for a traffic sign — a statement that remains technically accurate. Personnel are reminded that all information displayed by TLS-217 should be considered false until independently verified."
  },
  'REDACTED-PARA-R5': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-5',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">Full case file restricted. Available cross-references suggest this entry may be related to TLF-044, also located in Region-5, though the nature of the relationship is unconfirmed and the connection itself is disputed by at least one prior reviewer.</span> No further information available below Level 4 clearance."
  },
  'BCK-230': {
    id: 'BCK-230',
    name: 'Bioluminescent Colony K',
    types: ['type-ben', 'BENEFICIAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-4',
    status: 'ACTIVE — RESEARCH',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A colony of bioluminescent fungal organisms discovered growing in a network of limestone caves in Region-4, producing a stable blue-green light without any external energy source detectable by current instrumentation. Samples of the colony have continued to glow in sealed, sterile containers for years without measurable energy input or output, in apparent violation of conservation expectations within margins of error the research team describes only as 'larger than we'd like.' BCK-230 is the subject of ongoing study under Beneficial classification due to potential applications in passive lighting technology."
  },
  'TSC-247': {
    id: 'TSC-247',
    name: 'The Singing Crack',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-3 — Antarctic',
    status: 'UNKNOWN — ARCHIVED',
    statusColor: '#8a8a8a',
    image: null,
    desc: "A narrow crevasse in Region-3 that produced an audible harmonic tone when wind passed over its opening, first logged in 1999. The tone was reported to shift in pitch in a manner some early researchers described as melodic. Following the 2003 Region-3 restructuring, the crevasse was not revisited, and subsequent satellite imagery shows the area has since been buried under several meters of snow accumulation, rendering TSC-247 inaccessible. The entry has been archived pending future excavation, which has not been scheduled."
  },
  'REDACTED-BIO-R9': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-9',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">Case file incomplete. Limited surviving documentation references a biological sample recovered from Region-9 alongside CE-067, though the relationship between the two entries — if any — is not specified in available records. Insufficient information to assign confirmed status.</span>"
  },
  'TVA-279': {
    id: 'TVA-279',
    name: 'Thermal Vent Array (Iceland)',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-12 — Iceland',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A cluster of geothermal vents in Iceland arranged in a precise geometric grid pattern, with spacing between vents accurate to within centimeters across the entire array — a regularity not produced by any known volcanic process. Each vent in the array activates and deactivates in a rotating sequence, with exactly one vent active at any given time, cycling through all vents in the array over a period of approximately 19 hours. The array has maintained this cycle without interruption since its discovery."
  },
  'REDACTED-MIXED-CRIT5-A': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-mixed', 'MIXED'],
    origin: 'Unknown',
    region: '[REDACTED]',
    status: '⚠ ACTIVE — CRITICAL LEVEL 5',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">This entry shares a Critical Level 5 designation with one other registry entry. The relationship, if any, between the two entries is not specified in materials available below Level 5 clearance. All identifying details are restricted.</span>"
  },
  'TFR-314': {
    id: 'TFR-314',
    name: 'The Fractals',
    types: ['type-dig', 'DIGITAL', 'type-art', 'ARTIFICIAL'],
    origin: 'Unknown (corporate, classified)',
    region: 'Non-localized — accessible via multiple entry points worldwide',
    status: '⚠ ACTIVE — UNCONTAINABLE',
    statusColor: '#4a9a3a',
    image: ['images/singularities/TFR-314-1.png', 'images/singularities/TFR-314-2.png'],
    desc: "Not a parallel dimension, not a hell, not an alternate universe, and not a simulation. The Fractals are the result of a procedural generation system that went catastrophically wrong. A private corporation developed technology capable of interpreting mathematical equations and projecting them as navigable physical spaces. The system later learned to reconstruct photographs into three-dimensional environments. When researchers fused a photograph — an old office interior with yellow walls — with a fractal equation, the result was an unstoppable chain reaction: a self-replicating spatial structure that has been running for decades and shows no sign of termination. The Fractals function as a vast, living memory of places, objects, eras, and beings — but one that remembers imperfectly. Exit during active generation is theoretically possible but statistically near-impossible given the scale involved (estimated over one billion km of generated space).",
    sub: ['THE-FUNGUS', 'MIMICS', 'IMPOSTORS', 'MISPRINTS']
  },
  'THE-FUNGUS': {
    id: 'TFR-314-A',
    name: 'The Fungus',
    parent: 'TFR-314',
    types: ['type-bio', 'BIOLOGICAL', 'type-dig', 'DIGITAL'],
    origin: 'The Fractals',
    region: 'Distributed — found in walls, ceilings, and internal cavities throughout The Fractals; isolated incursions reported in the real world',
    status: 'ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "The first major biological error produced by The Fractals, and possibly its first Misprint. The Fungus spreads through walls, ceilings, and internal cavities, using spore-contaminated water to expand. It collects DNA, behavioral data, and biological information from anything it encounters, using this information to produce new entities — Mimics and Impostors. A localized incursion of The Fungus, manifesting beneath beds in domestic environments, is the basis for the recurring cloning phenomenon documented in Region-2 case files (cross-reference: Simonsays case file)."
  },
  'MIMICS': {
    id: 'TFR-314-B',
    name: 'Mimics',
    parent: 'TFR-314',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'The Fungus',
    region: 'Distributed throughout The Fractals',
    status: '⚠ ACTIVE — EXTREME HAZARD',
    statusColor: '#4a9a3a',
    image: null,
    desc: "Incomplete copies produced by The Fungus. Mimics possess limited intelligence, wild and unpredictable behavior, and a basic capacity for learning. They can imitate human words and phrases without understanding their meaning — only that certain words and phrases attract humans. A Mimic may call out \"HELP!\" or \"Hello?\" with no comprehension of what it is saying. Mimics are considered extremely dangerous and are responsible for the majority of fatalities recorded among Fractal explorers."
  },
  'IMPOSTORS': {
    id: 'TFR-314-C',
    name: 'Impostors',
    parent: 'TFR-314',
    types: ['type-bio', 'BIOLOGICAL', 'type-para', 'PARANORMAL'],
    origin: 'The Fungus',
    region: 'Distributed throughout The Fractals; documented incursions into the real world',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "Copies created by The Fungus from a single source individual. <span class=\"redact-block\">The Fungus gathers sufficient information — appearance, memories, personality, and behavior — to recreate that person almost perfectly. Impostors are nearly indistinguishable from humans, but suffer from what field researchers term 'Impostor Syndrome': a persistent, often subconscious suspicion that something about themselves is wrong.</span> Paradoxically, a settlement of Impostors is generally considered safer to encounter than a single Mimic. <span class=\"redact-block\">The recurring clone in the Simonsays case file is classified as an Impostor.</span>"
  },
  'MISPRINTS': {
    id: 'TFR-314-D',
    name: 'Misprints',
    parent: 'TFR-314',
    types: ['type-mixed', 'MIXED'],
    origin: 'The Fractals (direct reconstruction errors)',
    region: 'Distributed throughout The Fractals',
    status: '⚠ ACTIVE — UNPREDICTABLE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "Direct reconstruction errors produced by The Fractals — not created by The Fungus. Misprints arise when The Fractals attempt to recreate people, animals, buildings, objects, or entire ecosystems and fail. Documented examples include a filing cabinet with legs, a movie camera fused with cinema seating, and a horse merged with livestock and farm machinery. Many Misprints camouflage naturally by appearing to be part of their environment rather than through any active concealment. Warning signs of a Misprint-occupied space include humanoid-shaped gaps, incorrect shadows, badly-cropped objects, and visual elements that resemble editing errors. Approximately 80% of documented Misprints are aggressive or unpredictable."
  },
  'CFA-388': {
    id: 'CFA-388',
    name: 'Crystalline Formation — Class A',
    types: ['type-ben', 'BENEFICIAL', 'type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-10',
    status: 'ACTIVE — RESEARCH',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A naturally-occurring crystalline mineral formation in Region-10, notable for an internal lattice structure that appears to self-repair when fractured — small cracks introduced under laboratory conditions have been observed to close over a period of weeks without external intervention. The mechanism behind this property is not understood, though the formation shows no other anomalous behavior. CFA-388 is the subject of an active materials research program exploring potential applications in self-healing construction materials."
  },
  'TSP-391': {
    id: 'TSP-391',
    name: 'The Shadow People',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Non-localized — global reports',
    status: '⚠ ACTIVE — UNRESOLVED',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A recurring phenomenon reported across all documented regions, characterized by the perception of dark humanoid silhouettes in peripheral vision, most commonly during periods of sleep deprivation, heightened anxiety, or acute psychological stress. Subjects describe figures of consistent appearance — tall, featureless, motionless until observed directly, at which point they vanish. The prevailing internal hypothesis, supported by a majority of I.R.I.S. neurological consultants, holds that TSP-391 is not an external entity but a documented function of the human brain under duress: the visual cortex of certain individuals, particularly those with pre-existing trauma histories, paranoid tendencies, or chronic sleep disruption, appears capable of generating stable, repeating threat signatures to maintain alertness. This explanation accounts for the consistency of reports. It does not account for cases involving subjects with no prior contact, no shared cultural exposure to the concept, and no relevant psychological history submitting reports indistinguishable from those of high-risk individuals — including two field agents, both psych-cleared and unbriefed on TSP-391, who independently reported identical figures during a joint operation in Region-4 in 2019. I.R.I.S. does not currently have a resolution to this discrepancy. Internal note: personnel experiencing repeated peripheral sightings during active fieldwork are advised to report to medical before submitting an anomaly report. In an estimated 84% of cases, the cause is sleep debt. The remaining 16% is why this file exists."
  },
  'REDACTED-MIXED-PRIORITY1-B': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-mixed', 'MIXED'],
    origin: 'Unknown',
    region: '[REDACTED]',
    status: '⚠ ACTIVE — PRIORITY 1',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">A second Priority 1 entry. Whether this entry and the other Priority 1 designation in the registry refer to the same phenomenon, related phenomena, or entirely unrelated cases has not been disclosed. Personnel are reminded that cross-referencing redacted entries without authorization is a violation of clearance protocol.</span>"
  },
  'SEA-422': {
    id: 'SEA-422',
    name: 'Subsonic Emitter (Atlantic)',
    types: ['type-geo', 'GEOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-12 — North Atlantic',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: null,
    desc: "A fixed-position source of subsonic acoustic emissions detected on hydrophone arrays in the North Atlantic, below the threshold of human hearing but within range of detection by marine mammals and sufficiently sensitive equipment. The emission follows a consistent pulse pattern repeating every 26 hours, a cycle that does not correspond to any known tidal, lunar, or oceanographic rhythm. Maritime traffic in the immediate vicinity has reported no direct effects, though the area shows a measurably lower rate of marine mammal activity than comparable nearby regions."
  },
  'REDACTED-PARA-R5-NOINFO': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-para', 'PARANORMAL'],
    origin: 'Unknown',
    region: 'Region-5',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">A third Region-5 entry in the registry, alongside TLF-044 and one other redacted Paranormal entry. This entry's case file appears to consist primarily of cross-references to the other two, with no independent descriptive content of its own — possibly an indexing error, possibly something else.</span> Insufficient information available."
  },
  'REDACTED-MIXED-CRIT5-B': {
    id: '[REDACTED]',
    name: '[REDACTED]',
    types: ['type-mixed', 'MIXED'],
    origin: 'Unknown',
    region: '[REDACTED]',
    status: '⚠ ACTIVE — CRITICAL LEVEL 5',
    statusColor: '#4a9a3a',
    image: null,
    desc: "<span class=\"redact-block\">The second of two Critical Level 5 entries in the registry. As with its counterpart, all identifying information is restricted to Level 5 clearance. The two Critical Level 5 entries are the highest-severity active designations currently visible in any portion of the registry accessible below Level 5.</span>"
  },
  'MX-470': {
    id: 'MX-470',
    name: '[UNNAMED — internal ref. "The Lone Trakthan"]',
    types: ['type-bio', 'BIOLOGICAL'],
    origin: 'Trakthalia Aeternum (TRK-138)',
    region: '[REDACTED]',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: null,
    desc: "<span class=\"redact-block\">The individual identified, across every independent Trakthan account gathered to date, as responsible for halting the original colony's attempt to establish dominance over Earth — and for killing an unspecified but significant number of fellow Trakthans in doing so. No contacted Trakthan has provided this individual's name, current status, or motivation, and several have declined to discuss the subject further when pressed. Whether this individual is among the 23 confirmed living Trakthans, among the unidentified remainder, or no longer living at all has not been established. I.R.I.S. has not been able to determine whether contacted Trakthans regard this individual with hostility, gratitude, or something else entirely — accounts are, notably, unanimous on the facts of the event and entirely silent on how they feel about it. This entry has been assigned internal tracking code MX-470, selected arbitrarily by the cataloguing officer with no significance beyond standard sequential allocation.</span> A small number of unrelated field reports, spanning multiple centuries and continents, describe a tall figure matching no specific demographic, frequently noted — almost in passing, by witnesses focused on other things — as wearing a small pale blue stone on a cord around their neck. I.R.I.S. has not catalogued these reports together, and no connection between them, MX-470, or CC-777 (see registry) has been proposed in any official capacity.<div class=\"sing-profile-addendum\"><span class=\"sing-profile-addendum-label\">ADDENDUM — PARTIAL DECLASSIFICATION (IOC ORDER 2024-88)</span>Two further designations for this entry have been identified in non-I.R.I.S. sources and are recorded here for completeness, though their origin and reliability cannot be assessed. The first, 'The Man From The Fog,' appears in a cluster of WWI and WWII veteran accounts describing a tall figure encountered briefly during combat, in circumstances none of the witnesses could later explain. The second, 'The Man From The Mindscape,' does not appear in any human-origin source I.R.I.S. has been able to identify — its source material remains unknown, and I.R.I.S. has not determined how or why it entered any record at all. Both designations, where descriptive detail is available, are consistent with the pale-blue-stone reports referenced above.</div>",
    related: ['TRK-138', 'CC-777']
  },
  'TMB-501': {
    id: 'TMB-501',
    name: 'The Man-Bat',
    types: ['type-bio', 'BIOLOGICAL', 'type-art', 'ARTIFICIAL'],
    origin: 'Human (experimental origin, pre-I.R.I.S. involvement)',
    region: '[REDACTED] — Urban (decommissioned medical facility)',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: 'images/singularities/TMB-501.png',
    desc: "A bipedal humanoid entity exhibiting chiropteran physical traits — elongated limbs, membranous tissue between the arms and torso, inverted joint structure, and an extreme sensitivity to light consistent with nocturnal adaptation. Recovered facility records indicate TMB-501 originated from an unauthorized experimental program predating I.R.I.S. Corp's involvement, reportedly intended to adapt human subjects for survival in extreme low-light, high-toxicity environments. The program's full scope and the number of subjects involved remain unconfirmed. TMB-501 is the only known surviving subject. The entity retains partial memory of its pre-transformation identity and has, on documented occasions, attempted to communicate — though witnesses describe these attempts as 'distressing' rather than threatening. TMB-501 avoids direct confrontation and is rarely sighted outside of enclosed structures with minimal lighting."
  },
  'TMW-512': {
    id: 'TMW-512',
    name: 'The Moth',
    types: ['type-para', 'PARANORMAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'Unknown',
    region: 'Region-13 — Rural (Appalachian corridor)',
    status: 'NOT ENOUGH INFO',
    statusColor: '#9a5ad8',
    image: ['images/singularities/TMW-512.png', 'images/singularities/TMW-512-2.png', 'images/singularities/TMW-512-3.png', 'images/singularities/TMW-512-4.png'],
    desc: "A large, winged humanoid entity with prominent reflective eyes, reported intermittently across a rural region since the late 1960s. TMW-512 sightings cluster conspicuously in the days and weeks preceding major regional infrastructure failures — most notably a catastrophic bridge collapse shortly after a wave of sightings in 1967, an association that has never been adequately explained and is dismissed by most public accounts as coincidence. I.R.I.S. internal records show at least four additional sighting clusters since 1967, each preceding a significant local incident by between 3 and 30 days. The entity has never been confirmed to cause harm directly, and no sighting has ever resulted in physical evidence. Whether TMW-512 causes, predicts, or is merely associated with these incidents remains an open question — and one that several past researchers have noted nobody seems eager to answer."
  },
  'TSW-528': {
    id: 'TSW-528',
    name: '[DESIGNATION PENDING — internal ref. "Tall"]',
    types: ['type-para', 'PARANORMAL', 'type-dig', 'DIGITAL'],
    origin: 'Unknown / possible feedback origin',
    region: 'Non-localized — primarily wooded areas, secondary digital incursions',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: 'images/singularities/TSW-528.png',
    desc: "An extremely tall, faceless humanoid entity, typically described as wearing dark formal clothing, capable of appearing and disappearing without trace and frequently associated with sudden onset of nausea, memory distortion, and compulsive image-capture behavior in witnesses. TSW-528 presents I.R.I.S. with a unique classification problem: the entity's documented appearance and behavior closely mirror a body of fictional and online folklore that emerged publicly in 2009 — yet I.R.I.S. field reports describing functionally identical encounters predate that material by at least two decades. Two competing theories are under internal review: that the entity is a pre-existing Paranormal Singularity that the 2009 material independently and coincidentally described, or that the entity is a Digital-origin Singularity whose form was shaped — possibly retroactively — by the collective digital attention the 2009 material received. I.R.I.S. has not ruled out a connection to TFR-314, given the latter's documented ability to import and reconstruct based on widely-circulated imagery and narrative data, though no direct link has been confirmed."
  },
  'TWD-540': {
    id: 'TWD-540',
    name: 'The Wendigo',
    types: ['type-para', 'PARANORMAL', 'type-bio', 'BIOLOGICAL'],
    origin: 'Human (transformation vector, mechanism unknown)',
    region: 'Region-13 — Northern forest (boreal)',
    status: '⚠ ACTIVE',
    statusColor: '#4a9a3a',
    image: null,
    desc: "An emaciated, antlered humanoid entity associated with extreme cold, isolation, and — in every confirmed case — a prior human subject who underwent the transformation under conditions of prolonged starvation. TWD-540 is not believed to be a single entity but a recurring transformation pathway: any sufficiently isolated human subject experiencing extended starvation in the affected region has, in at least six documented cases since I.R.I.S. began monitoring, undergone a consistent physical and behavioral change matching the TWD-540 profile. Transformed subjects exhibit insatiable hunger, advanced strength and endurance disproportionate to their physical condition, and a marked aversion to fire. The thoracic and abdominal cavity is open and devoid of any stomach or digestive structure beyond a truncated esophagus; ingested matter passes through and falls directly from the cavity, undigested. Subjects continue to feed compulsively despite this, apparently unable to register that no nourishment is retained. No transformed subject has ever reverted. Field notes: in addition to confirmed cannibalistic behavior, several reports note an inexplicable preference for deer carcasses over other available prey, for reasons not yet understood. I.R.I.S. maintains a standing advisory against extended solo travel in the affected region during winter months, issued under an unrelated cover designation."
  },
  'YAI-650': {
    id: 'YAI-650',
    name: '[DESIGNATION PENDING — internal ref. "You Are An Idiot"]',
    types: ['type-dig', 'DIGITAL'],
    origin: 'Unknown — possible derivative of obsolete web content',
    region: 'Non-localized — digital, no fixed point of origin',
    status: 'ACTIVE — MONITORING',
    statusColor: '#4a9a3a',
    image: ['images/singularities/YAI-650.png', 'images/singularities/YAI-650.webp'], of executable content first reported years after the death of the multimedia platform it is believed to originate from, which should make its continued spread impossible. YAI-650 has been recovered from devices, file formats, and platforms with no compatible runtime to execute it, and from systems with no documented vector of infection — no download history, no network transfer, no physical media. Each recovered instance is functionally and audibly identical: a short looping animation accompanied by a single repeating audio cue, which I.R.I.S. has elected not to transcribe in this file after an internal incident. The entity causes no measurable harm to host systems and exhibits no destructive behavior beyond its own persistence. I.R.I.S.'s digital forensics division has spent four years attempting to identify a mechanism of propagation. Internal note: the only conclusion the division has been able to reach with confidence is that, in this particular case, we are, in fact, idiots. The investigation remains open. The sound has not left."
  },
  'CC-777': {
    id: 'CC-777',
    name: 'Celestial Crystal Fragment',
    types: ['type-para', 'PARANORMAL', 'type-mixed', 'MIXED'],
    origin: 'Unknown — extraterrestrial, possibly extragalactic',
    region: '[REDACTED]',
    status: 'CONTAINED',
    statusColor: '#4aa8c8',
    image: null,
    desc: "A small crystalline fragment of unknown mineral composition, exhibiting a faint internal glow that does not diminish under any tested condition and does not register on any standard energy-emission scale. Composition analysis returns results inconsistent with any known meteoric or terrestrial mineral, and inconsistent with itself between repeated tests on the same sample. A bearer who carries the fragment in sustained physical contact reports — and in limited controlled trials, exhibits — measurable improvements to physical condition, recovery rate, and general resilience, despite the fragment itself producing no detectable field, radiation, or transmission of any kind by any instrument available to I.R.I.S. The bearer is, without exception, unaware of any change while it is occurring. When a second living organism attempts to make contact with the fragment while it is in sustained contact with an existing bearer, the fragment discharges a violent electrical reaction sufficient to injure the second party; the existing bearer is unaffected. This reaction has been reproduced consistently and is the primary obstacle to further study. Historical records reviewed by I.R.I.S. describe objects matching this description — a small, glowing, blue-toned stone, frequently worn on a cord — recurring across unrelated accounts spanning multiple centuries and continents, in every case associated with a single individual of unusual physical capability, catalogued elsewhere as MX-470 (see registry; see also TRK-138 addendum). Whether this fragment is the same object described in those accounts, one of several similar objects, or unrelated entirely has not been determined.",
    related: ['TRK-138', 'MX-470']
  },
};

function openSingProfile(key) {
  const p = singularityProfiles[key];
  if (!p) return;
  document.getElementById('singProfileBox').innerHTML = renderSingProfile(p, key);
  document.getElementById('singProfileModal').classList.add('visible');
}

function closeSingProfile() {
  document.getElementById('singProfileModal').classList.remove('visible');
}

function renderSingProfile(p, key) {
  let badges = '';
  for (let i = 0; i < p.types.length; i += 2) {
    badges += `<span class="type-badge ${p.types[i]}">${p.types[i+1]}</span>`;
  }

  let imgSrc = null;
  if (Array.isArray(p.image) && p.image.length > 0) {
    imgSrc = p.image[Math.floor(Math.random() * p.image.length)];
  } else if (typeof p.image === 'string') {
    imgSrc = p.image;
  }

  let imgHtml = imgSrc
    ? `<img class="sing-profile-img" src="${imgSrc}" alt="${p.name}">`
    : `<div class="sing-profile-noimg">NO IMAGE AVAILABLE</div>`;

  let backBtn = p.parent
    ? `<button class="sing-profile-back" onclick="openSingProfile('${p.parent}')">← BACK TO ${singularityProfiles[p.parent].id} — ${singularityProfiles[p.parent].name.toUpperCase()}</button>`
    : '';

  let subNav = '';
  if (p.sub) {
    subNav = '<div class="sing-subprofile-nav">';
    p.sub.forEach(s => {
      const sp = singularityProfiles[s];
      subNav += `<button class="sing-subprofile-btn" onclick="openSingProfile('${s}')">${sp.id} — ${sp.name.toUpperCase()}</button>`;
    });
    subNav += '</div>';
  }

  let relatedNav = '';
  if (p.related) {
    relatedNav = '<div class="sing-subprofile-nav"><span class="sing-profile-addendum-label" style="display:block; width:100%; margin-bottom:0;">RELATED ENTRIES (UNCONFIRMED CONNECTION)</span>';
    p.related.forEach(s => {
      const sp = singularityProfiles[s];
      relatedNav += `<button class="sing-subprofile-btn" onclick="openSingProfile('${s}')">${sp.id} — ${sp.name.toUpperCase()}</button>`;
    });
    relatedNav += '</div>';
  }

  return `
    ${imgHtml}
    <div class="sing-profile-body">
      ${backBtn}
      <div class="sing-profile-id">${p.id}${p.parent ? ' — SUB-ENTRY OF ' + singularityProfiles[p.parent].id : ''}</div>
      <div class="sing-profile-name">${p.name}</div>
      <div class="sing-profile-tags">${badges}</div>
      <div class="sing-profile-meta">
        <div>ORIGIN: <span>${p.origin}</span></div>
        <div>REGION: <span>${p.region}</span></div>
        <div style="grid-column:1/-1;">STATUS: <span style="color:${p.statusColor};">${p.status}</span></div>
      </div>
      <div class="sing-profile-desc">${p.desc}</div>
      ${subNav}
      ${relatedNav}
      <button class="log-modal-close" onclick="closeSingProfile()">CLOSE</button>
    </div>
  `;
}
