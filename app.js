const risks=[
 {id:'R01',title:'Droits SIRH non retirés après mobilité',domain:'Habilitations',level:'Critique',prob:4,impact:4,mastery:45,owner:'Référent SIRH'},
 {id:'R02',title:'Données administratives incomplètes',domain:'Qualité des données',level:'Élevé',prob:4,impact:3,mastery:61,owner:'Gestion collective'},
 {id:'R03',title:'Écart entre poste et régime indemnitaire',domain:'Rémunération',level:'Élevé',prob:3,impact:4,mastery:57,owner:'Section indemnitaire'},
 {id:'R04',title:'Retard de prise en charge d’un recrutement',domain:'Recrutement',level:'Élevé',prob:3,impact:3,mastery:68,owner:'Plan de recrutement'},
 {id:'R05',title:'Traçabilité insuffisante des validations',domain:'Organisation',level:'Modéré',prob:3,impact:2,mastery:72,owner:'BRHPC'},
 {id:'R06',title:'Doublon de dossier agent',domain:'Qualité des données',level:'Modéré',prob:2,impact:3,mastery:76,owner:'Référent SIRH'},
 {id:'R07',title:'Échéance de contrat non anticipée',domain:'Gestion collective',level:'Modéré',prob:2,impact:3,mastery:70,owner:'Gestion collective'},
 {id:'R08',title:'Indicateur produit sur une base non figée',domain:'Pilotage',level:'Modéré',prob:3,impact:2,mastery:74,owner:'Cellule pilotage'},
 {id:'R09',title:'Hétérogénéité des pièces justificatives',domain:'Processus',level:'Modéré',prob:2,impact:2,mastery:79,owner:'Chefs de section'},
 {id:'R10',title:'Mise à jour tardive de l’organigramme',domain:'Organisation',level:'Faible',prob:2,impact:1,mastery:84,owner:'BRHPC'},
 {id:'R11',title:'Erreur de libellé dans un tableau de bord',domain:'Pilotage',level:'Faible',prob:1,impact:2,mastery:88,owner:'Cellule pilotage'},
 {id:'R12',title:'Archivage tardif d’un dossier clos',domain:'Archivage',level:'Faible',prob:1,impact:1,mastery:90,owner:'Gestion collective'}
];
const controls=[
 {ref:'CI-26-041',name:'Revue trimestrielle des habilitations SIRH',domain:'Habilitations',owner:'L. Martin',date:'04/10/2026',status:'Écart majeur'},
 {ref:'CI-26-042',name:'Rapprochement postes / régime indemnitaire',domain:'Rémunération',owner:'S. Bernard',date:'07/10/2026',status:'Écart majeur'},
 {ref:'CI-26-043',name:'Complétude des dossiers de recrutement',domain:'Recrutement',owner:'N. Petit',date:'15/09/2026',status:'Écart mineur'},
 {ref:'CI-26-044',name:'Contrôle des échéances contractuelles',domain:'Gestion collective',owner:'A. Robert',date:'22/09/2026',status:'Conforme'},
 {ref:'CI-26-045',name:'Détection des doublons de matricule',domain:'Qualité des données',owner:'L. Martin',date:'25/09/2026',status:'Écart mineur'},
 {ref:'CI-26-046',name:'Gel de la base mensuelle des indicateurs',domain:'Pilotage',owner:'D. Morel',date:'29/09/2026',status:'Conforme'},
 {ref:'CI-26-047',name:'Revue des pièces CIA',domain:'Rémunération',owner:'S. Bernard',date:'12/10/2026',status:'À réaliser'},
 {ref:'CI-26-048',name:'Vérification des départs et comptes actifs',domain:'Habilitations',owner:'L. Martin',date:'18/10/2026',status:'À réaliser'},
 {ref:'CI-26-049',name:'Contrôle de cohérence des affectations',domain:'Qualité des données',owner:'N. Petit',date:'26/09/2026',status:'Conforme'}
];
const actions=[
 {id:'ACT-031',title:'Clôturer 7 comptes après mobilité',desc:'Droits encore actifs sur un ancien périmètre de gestion.',owner:'L. Martin',due:'04 oct.',status:'À engager',priority:true,level:'Critique'},
 {id:'ACT-032',title:'Corriger 12 dossiers administratifs',desc:'Champs statutaires ou affectation incomplets.',owner:'N. Petit',due:'07 oct.',status:'En cours',priority:true,level:'Élevé'},
 {id:'ACT-033',title:'Rapprocher 4 positions indemnitaires',desc:'Écart entre poste occupé et paramétrage IFSE.',owner:'S. Bernard',due:'10 oct.',status:'En cours',priority:true,level:'Élevé'},
 {id:'ACT-034',title:'Formaliser la validation des extractions',desc:'Ajouter une trace de revue avant diffusion mensuelle.',owner:'D. Morel',due:'18 oct.',status:'À engager',priority:false,level:'Modéré'},
 {id:'ACT-035',title:'Fusionner deux dossiers en doublon',desc:'Même agent enregistré sous deux identifiants techniques.',owner:'L. Martin',due:'25 sept.',status:'Clôturé',priority:false,level:'Modéré'},
 {id:'ACT-036',title:'Uniformiser la liste des pièces attendues',desc:'Référentiel partagé pour les quatre sections métier.',owner:'A. Robert',due:'28 sept.',status:'Clôturé',priority:false,level:'Modéré'},
 {id:'ACT-037',title:'Sécuriser les alertes de fin de contrat',desc:'Contrôle à J-90 et J-30 avec responsable identifié.',owner:'N. Petit',due:'22 oct.',status:'À engager',priority:false,level:'Modéré'}
];
const barData=[['Recrutement',92],['Gestion collective',88],['Rémunération',81],['Qualité des données',86],['Habilitations',75]];
const processDetails=[
 ['Détecter et enregistrer','Le contrôleur consigne le fait générateur, la population concernée, la règle attendue et la preuve initiale. Un identifiant unique garantit la traçabilité.'],
 ['Qualifier l’écart','La cause, l’impact et la probabilité sont analysés. La criticité détermine le délai de traitement et le niveau d’escalade.'],
 ['Décider du traitement','Une action proportionnée, un responsable et une date cible sont validés avec le métier. Les dépendances sont explicitées.'],
 ['Mettre en œuvre','Le pilote réalise la correction et joint les éléments probants. Tout retard est motivé et, si nécessaire, rééchelonné.'],
 ['Vérifier et clôturer','Le contrôle d’efficacité confirme que la cause est traitée. La clôture est validée par la cellule pilotage et intégrée au reporting.']
];

const titleMap={dashboard:'Tableau de bord',risks:'Cartographie des risques',controls:'Contrôles & écarts',actions:'Anomalies & actions',process:'Processus'};
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===id));document.getElementById('pageTitle').textContent=titleMap[id];document.querySelector('.sidebar').classList.remove('open');document.getElementById('menuButton').setAttribute('aria-expanded','false');window.scrollTo({top:0,behavior:'smooth'});}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));
document.getElementById('menuButton').addEventListener('click',e=>{const s=document.querySelector('.sidebar');s.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',s.classList.contains('open'));});

document.getElementById('barChart').innerHTML=barData.map(([n,v])=>`<div class="bar-row"><span>${n}</span><div class="bar-track"><div class="bar-fill" style="width:${v}%"></div></div><strong>${v} %</strong></div>`).join('');
const alertItems=actions.filter(a=>a.priority);
document.getElementById('dashboardAlerts').innerHTML=alertItems.map(a=>`<article class="alert-card ${a.level==='Critique'?'critical':''}"><div class="meta"><span>${a.id}</span><span>Échéance ${a.due}</span></div><h4>${a.title}</h4><p>${a.owner} · ${a.level}</p></article>`).join('');

function renderMatrix(){const cells=[];for(let p=4;p>=1;p--){for(let i=1;i<=4;i++){const score=p*i,cls=score>=12?'c3':score>=6?'c2':'c1';const tokens=risks.filter(r=>r.prob===p&&r.impact===i).map(r=>`<span class="risk-token" title="${r.id} — ${r.title}">${r.id.slice(1)}</span>`).join('');cells.push(`<div class="matrix-cell ${cls}">${tokens}</div>`);}}document.getElementById('riskMatrix').innerHTML=`<div class="matrix-label-y">PROBABILITÉ</div>${cells.join('')}<div class="matrix-axis">IMPACT</div>`;}
function renderRisks(){const f=document.getElementById('riskFilter').value;const items=risks.filter(r=>f==='all'||r.level===f);document.getElementById('riskCount').textContent=`${items.length} risque${items.length>1?'s':''} affiché${items.length>1?'s':''}`;document.getElementById('riskList').innerHTML=items.map(r=>`<article class="risk-card"><div><h4>${r.id} · ${r.title}</h4><p>${r.domain} · Pilote : ${r.owner}</p></div><span class="pill ${r.level==='Élevé'?'high':r.level==='Modéré'?'medium':r.level==='Faible'?'low':'critical'}">${r.level}</span><div class="mastery">Niveau de maîtrise : ${r.mastery} %<div class="mastery-bar"><i style="width:${r.mastery}%"></i></div></div></article>`).join('');}
document.getElementById('riskFilter').addEventListener('change',renderRisks);

function statusClass(s){return s==='Conforme'?'ok':s==='Écart mineur'?'minor':s==='Écart majeur'?'major':'todo'}
function renderControls(){const q=document.getElementById('controlSearch').value.toLowerCase(),f=document.getElementById('controlStatus').value;const items=controls.filter(c=>(f==='all'||c.status===f)&&Object.values(c).join(' ').toLowerCase().includes(q));document.getElementById('controlRows').innerHTML=items.map(c=>`<tr><td>${c.ref}</td><td>${c.name}</td><td>${c.domain}</td><td>${c.owner}</td><td>${c.date}</td><td><span class="result ${statusClass(c.status)}">${c.status}</span></td></tr>`).join('');document.getElementById('controlEmpty').style.display=items.length?'none':'block';}
document.getElementById('controlSearch').addEventListener('input',renderControls);document.getElementById('controlStatus').addEventListener('change',renderControls);

let priorityOnly=false;
function renderActions(){const items=priorityOnly?actions.filter(a=>a.priority):actions;const statuses=['À engager','En cours','Clôturé'];document.getElementById('actionSummary').innerHTML=statuses.map(s=>`<span class="status-chip"><strong>${items.filter(a=>a.status===s).length}</strong>${s}</span>`).join('');document.getElementById('actionBoard').innerHTML=statuses.map(s=>{const col=items.filter(a=>a.status===s);return `<section class="kanban-col"><div class="kanban-head"><h3>${s}</h3><span>${col.length}</span></div>${col.map(a=>`<article class="action-card ${a.priority?'priority':''}"><span class="pill ${a.level==='Critique'?'critical':a.level==='Élevé'?'high':'medium'}">${a.level}</span><h4>${a.title}</h4><p>${a.desc}</p><div class="action-meta"><span>${a.owner}</span><strong>${a.due}</strong></div></article>`).join('')||'<p class="empty-col">Aucune action</p>'}</section>`}).join('');document.getElementById('priorityToggle').textContent=priorityOnly?'Afficher toutes les actions':'Afficher uniquement les priorités';}
document.getElementById('priorityToggle').addEventListener('click',()=>{priorityOnly=!priorityOnly;renderActions();});
document.getElementById('focusPriority').addEventListener('click',()=>{priorityOnly=true;renderActions();showView('actions');});

function setProcess(i){document.querySelectorAll('.process-step').forEach((b,j)=>b.classList.toggle('active',i===j));const d=processDetails[i];document.getElementById('processDetail').innerHTML=`<h3>${i+1}. ${d[0]}</h3><p>${d[1]}</p>`;}
document.querySelectorAll('.process-step').forEach((b,i)=>b.addEventListener('click',()=>setProcess(i)));

function csvEscape(v){return `"${String(v).replaceAll('"','""')}"`}
function exportCsv(type){let rows,name;if(type==='risks'){rows=[['Référence','Risque','Domaine','Niveau','Probabilité','Impact','Maîtrise','Pilote'],...risks.map(r=>[r.id,r.title,r.domain,r.level,r.prob,r.impact,r.mastery+' %',r.owner])];name='cartographie-risques-fictive.csv';}else{rows=[['Référence','Contrôle','Domaine','Pilote','Échéance','Résultat'],...controls.map(c=>[c.ref,c.name,c.domain,c.owner,c.date,c.status])];name='registre-controles-fictif.csv';}const blob=new Blob(['\ufeff'+rows.map(r=>r.map(csvEscape).join(';')).join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href);showToast('Export CSV généré — données fictives.');}
document.querySelectorAll('.export').forEach(b=>b.addEventListener('click',()=>exportCsv(b.dataset.export)));
let toastTimer;function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}

renderMatrix();renderRisks();renderControls();renderActions();setProcess(0);
