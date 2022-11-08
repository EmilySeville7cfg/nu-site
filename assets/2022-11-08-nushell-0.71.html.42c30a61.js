import{_ as l,r,o as h,c as i,f as a,a as t,b as n,d as e,e as s}from"./app.1cda1be1.js";const _="/assets/right_prompt_default.63e0b6fa.png",d="/assets/right_prompt.fae03b8a.png",c={},u=t("h1",{id:"nushell-0-71",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-71","aria-hidden":"true"},"#"),e(" Nushell 0.71")],-1),p=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),f=t("p",null,"Today, we're releasing version 0.71 of Nu. This release includes lots of overall polish.",-1),g=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),m=e("Nu 0.71 is available as "),b={href:"https://github.com/nushell/nushell/releases/tag/0.71.0",target:"_blank",rel:"noopener noreferrer"},k=e("pre-built binaries"),w=e(" or from "),y={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},v=e("crates.io"),x=e(". If you have Rust installed you can install it using "),R=t("code",null,"cargo install nu",-1),N=e("."),P=s('<p>If you want all the built-in goodies, such as support for dataframes and SQLite databases, you can install it via <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="new-operator-merelymyself" tabindex="-1"><a class="header-anchor" href="#new-operator-merelymyself" aria-hidden="true">#</a> New <code>++</code> operator (merelymyself)</h2>',4),T=e("In this release, you can now use the "),I={href:"https://github.com/nushell/nushell/pull/6766",target:"_blank",rel:"noopener noreferrer"},U=t("code",null,"++",-1),C=e(" operator to append lists together"),F=e("."),S=s(`<p>For example, you can combine two lists into a new lists made up of the both lists:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span><span class="token punctuation">]</span> ++ <span class="token punctuation">[</span><span class="token number">3</span>, <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p><em>Note: Currently, this operator cannot be used to join two tables. This functionality is still being worked on and will likely be present in the next version.</em></p><h2 id="improved-consistency-across-commands-and-types" tabindex="-1"><a class="header-anchor" href="#improved-consistency-across-commands-and-types" aria-hidden="true">#</a> Improved consistency across commands and types</h2><p>Nushell continues improve quality of the language and shell with a set of consistency improvements in this release. These include:</p>`,5),A=e("More "),M={href:"https://github.com/nushell/nushell/pull/6951",target:"_blank",rel:"noopener noreferrer"},W=e("iterating filter commands"),B=e(" now support the "),D=t("code",null,"$in",-1),E=e(" variable consistently (webbedspace)"),q=e("Lists "),j={href:"https://github.com/nushell/nushell/pull/6932",target:"_blank",rel:"noopener noreferrer"},L=e("now support "),V=t("code",null,"upsert",-1),z=e(" (fdncred)"),G=t("code",null,"merge",-1),$=e(" can now also "),O={href:"https://github.com/nushell/nushell/pull/6919",target:"_blank",rel:"noopener noreferrer"},Y=e("operate on records"),H=e(" (webbedspace)"),K=t("code",null,"str substring",-1),X=e(" can "),Q={href:"https://github.com/nushell/nushell/pull/6867",target:"_blank",rel:"noopener noreferrer"},J=e("take ranges"),Z=e(" (rgwood)"),ee=t("code",null,"from",-1),te=e(" and "),oe=t("code",null,"to",-1),ne=e(" now "),se={href:"https://github.com/nushell/nushell/pull/6856",target:"_blank",rel:"noopener noreferrer"},le=e("show help info"),re=e(" (rgwood)"),he=t("h2",{id:"right-prompts-can-now-be-on-the-last-line-nibon7",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#right-prompts-can-now-be-on-the-last-line-nibon7","aria-hidden":"true"},"#"),e(" Right prompts can now be on the last line (nibon7)")],-1),ie=e("Previously the right prompt appeared only on the same line where the user input started. Now you can choose to "),ae={href:"https://github.com/nushell/nushell/pull/6781",target:"_blank",rel:"noopener noreferrer"},_e=e("place the right prompt part on the last line of user input"),de=e(". This feature is not enabled by default, you can enable it using the "),ce=t("code",null,"config nu",-1),ue=e(" command to modify the config.nu file, just set "),pe=t("code",null,"render_right_prompt_on_last_line",-1),fe=e(" to true:"),ge=s(`<div class="language-text ext-text"><pre class="language-text"><code>let-env config {
  render_right_prompt_on_last_line : true
  ...
}
</code></pre></div><p>Default</p><p><img src="`+_+'" alt="Default right prompt"></p><p>Right prompt at bottom</p><p><img src="'+d+'" alt="Right prompt on the last line"></p><h2 id="configuring-the-default-value-viewer-via-display-output-hook-perbothner" tabindex="-1"><a class="header-anchor" href="#configuring-the-default-value-viewer-via-display-output-hook-perbothner" aria-hidden="true">#</a> Configuring the default value viewer via <code>display_output</code> hook (perbothner)</h2>',6),me=e("You're now able to configure a new hook, "),be={href:"https://github.com/nushell/nushell/pull/6915",target:"_blank",rel:"noopener noreferrer"},ke=e("called "),we=t("code",null,"display_output",-1),ye=e(", which will become the default way that you view data."),ve=t("p",null,[e("Using this, you can for example, use "),t("code",null,"table --expand"),e(" to always see fully expanded tables.")],-1),xe=t("p",null,[e("If your terminal supports it, you can this to render a more full-featured output. For example, DomTerm could be used by setting the "),t("code",null,"display_output"),e(" hook to: "),t("code",null,"to html --partial --no-color | domterm hcat"),e(", sending html to the terminal to be rendered when displaying values.")],-1),Re=t("h2",{id:"updated-pr-review-process",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#updated-pr-review-process","aria-hidden":"true"},"#"),e(" Updated PR Review Process")],-1),Ne=e("Recently, we have been fortunate to see a rise in submitted pull requests (PRs) and we are super grateful for this growing desire to improve Nushell. Unfortunately, in some cases, a well-intended PR does not match the direction Nushell is going, forcing us to close it which leads to wasted time and effort. To help focus PRs in the future, we kindly ask potential contributors to first reach out to us before making a substantial change to Nushell, especially if the change will affect user experience. We updated our "),Pe={href:"https://github.com/nushell/nushell/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},Te=e("contributing guide"),Ie=e(" as well as the PR template to reflect this policy. To summarize:"),Ue=e("If you want to make some change to Nushell that is more involved than simple bug-fixing, please go to "),Ce={href:"https://discordapp.com/invite/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},Fe=e("Discord"),Se=e(" or a "),Ae={href:"https://github.com/nushell/nushell/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},Me=e("GitHub issue"),We=e(" and chat with some core team members and/or other contributors about it."),Be=t("li",null,"After getting a green light from the core team, implement the feature, open a pull request (PR) and write a full description of the change.",-1),De=t("li",null,"If your PR includes any use-facing features (such as adding a flag to a command), clearly list them in the PR description.",-1),Ee=t("li",null,"Then, core team members and other regular contributors will review the PR and suggest changes.",-1),qe=t("li",null,"When we all agree, the PR will be merged.",-1),je=e("If your PR includes any user-facing features, make sure the changes are also reflected in "),Le={href:"https://github.com/nushell/nushell.github.io",target:"_blank",rel:"noopener noreferrer"},Ve=e("the documentation"),ze=e(" after the PR is merged."),Ge=t("li",null,"Congratulate yourself, you just improved Nushell! \u{1F603}",-1),$e=t("p",null,"We hope the new policy will help us make the PR review process smoother.",-1),Oe=t("h2",{id:"completion-actions-now-more-familiar-dandavison",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#completion-actions-now-more-familiar-dandavison","aria-hidden":"true"},"#"),e(" Completion actions now more familiar (dandavison)")],-1),Ye=t("p",null,"We've also recently improved how completions work in Nushell to feel closer to how other shells work. Specifically:",-1),He=t("ul",null,[t("li",null,`Completion goes "as far as possible". So, the entire word if there's a unique completion, or else up to the shared prefix of possible completions.`),t("li",null,"Removes the quick completion behavior whereby a word was completed automatically as soon as the input came to have a unique completion."),t("li",null,"Tab now completes instead of selecting the next menu item (this can be configured)")],-1),Ke=t("h1",{id:"breaking-changes",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#breaking-changes","aria-hidden":"true"},"#"),e(" Breaking changes")],-1),Xe=e("New "),Qe=t("code",null,"--force (-f)",-1),Je=e(" flag for the "),Ze=t("code",null,"mv",-1),et=e(" command. This change alters "),tt=t("code",null,"mv",-1),ot=e(" default behavior. By default overwriting existing files is now prevented (You can use "),nt=t("code",null,"alias mv = mv -f",-1),st=e(" in you config to get the old defaults back). ("),lt={href:"https://github.com/nushell/nushell/pull/6904",target:"_blank",rel:"noopener noreferrer"},rt=e("#6904"),ht=e(")"),it=e("The column name for the command name in "),at=t("code",null,"$nu.scope.commands",-1),_t=e(" has been changed from "),dt=t("code",null,"command",-1),ct=e(" to "),ut=t("code",null,"name",-1),pt=e(". Thus, "),ft=t("code",null,"$nu.scope.commands | where name =~ zip",-1),gt=e(" would give you specific command info. ("),mt={href:"https://github.com/nushell/nushell/pull/7007",target:"_blank",rel:"noopener noreferrer"},bt=e("#7007"),kt=e(")"),wt=e("The "),yt=t("code",null,"str distance",-1),vt=e(" command now directly returns an "),xt=t("code",null,"Int",-1),Rt=e(" instead of a record "),Nt=t("code",null,'{"distance": <Int>}',-1),Pt=e(" ("),Tt={href:"https://github.com/nushell/nushell/pull/6963",target:"_blank",rel:"noopener noreferrer"},It=e("#6963"),Ut=e(")"),Ct=t("li",null,[e("The argument order of "),t("code",null,"format filesize"),e(" was made consistent with other commands that accept a "),t("code",null,"CellPath"),e(" to specify fields that should be affected by it. Now the string specifying the format is the first positional argument and the cell path is specified in the following positional argument(s). ([#6879]https://github.com/nushell/nushell/pull/6879)")],-1),Ft=e("The "),St=t("code",null,"--perf",-1),At=e(" flag for Nu was removed as part of an effort to simplify diagnostics logging "),Mt={href:"https://github.com/nushell/nushell/pull/6834",target:"_blank",rel:"noopener noreferrer"},Wt=e("#6834"),Bt=t("h1",{id:"next-steps",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#next-steps","aria-hidden":"true"},"#"),e(" Next Steps")],-1),Dt=e("We've drafted a version of the "),Et={href:"https://github.com/nushell/nushell.github.io/pull/656",target:"_blank",rel:"noopener noreferrer"},qt=e("design philosophy for 0.80"),jt=e(", and would love to get your feedback. If you'd like to become part of the effort, please "),Lt={href:"https://discord.gg/NtAbbGn",target:"_blank",rel:"noopener noreferrer"},Vt=e("join the discord"),zt=e("."),Gt=t("h1",{id:"full-changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#full-changelog","aria-hidden":"true"},"#"),e(" Full changelog")],-1),$t=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),Ot=e("jt created "),Yt={href:"https://github.com/nushell/nushell/pull/7061",target:"_blank",rel:"noopener noreferrer"},Ht=e("bump to 0.71, use 1.63 toolchain"),Kt=e(", and "),Xt={href:"https://github.com/nushell/nushell/pull/6995",target:"_blank",rel:"noopener noreferrer"},Qt=e("Remove unnecessary clone in par-each"),Jt=e("sholderbach created "),Zt={href:"https://github.com/nushell/nushell/pull/7050",target:"_blank",rel:"noopener noreferrer"},eo=e("Pin reedline to "),to=t("code",null,"0.14.0",-1),oo=e(" release"),no=e(", and "),so={href:"https://github.com/nushell/nushell/pull/7046",target:"_blank",rel:"noopener noreferrer"},lo=e("Make the example names unique across workspace"),ro=e(", and "),ho={href:"https://github.com/nushell/nushell/pull/7023",target:"_blank",rel:"noopener noreferrer"},io=e("Update reedline"),ao=e(", and "),_o={href:"https://github.com/nushell/nushell/pull/7019",target:"_blank",rel:"noopener noreferrer"},co=e("Make example binaries proper cargo examples"),uo=e(", and "),po={href:"https://github.com/nushell/nushell/pull/6966",target:"_blank",rel:"noopener noreferrer"},fo=e("Refactor ansi stripping into "),go=t("code",null,"nu-util",-1),mo=e(" functions"),bo=e(", and "),ko={href:"https://github.com/nushell/nushell/pull/6965",target:"_blank",rel:"noopener noreferrer"},wo=e("Remove inadvertent dep on original "),yo=t("code",null,"ansi_term",-1),vo=e(", and "),xo={href:"https://github.com/nushell/nushell/pull/6953",target:"_blank",rel:"noopener noreferrer"},Ro=e("Update reedline to latest dev"),No=e(", and "),Po={href:"https://github.com/nushell/nushell/pull/6945",target:"_blank",rel:"noopener noreferrer"},To=e("Remove unused dependencies"),Io=e(", and "),Uo={href:"https://github.com/nushell/nushell/pull/6940",target:"_blank",rel:"noopener noreferrer"},Co=e("Move nu-test-support into dev deps on nu-command"),Fo=e(", and "),So={href:"https://github.com/nushell/nushell/pull/6924",target:"_blank",rel:"noopener noreferrer"},Ao=e("Update "),Mo=t("code",null,"nix",-1),Wo=e(" crate to "),Bo=t("code",null,"0.25",-1),Do=e(" and narrow features"),Eo=e(", and "),qo={href:"https://github.com/nushell/nushell/pull/6897",target:"_blank",rel:"noopener noreferrer"},jo=e("Fix "),Lo=t("code",null,"each while",-1),Vo=e(" behavior when printing and maybe in other situations by fusing the iterator"),zo=e(", and "),Go={href:"https://github.com/nushell/nushell/pull/6877",target:"_blank",rel:"noopener noreferrer"},$o=e("Wrap "),Oo=t("code",null,"open",-1),Yo=e(" parse errors from "),Ho=t("code",null,"from",-1),Ko=e(" commands"),Xo=e(", and "),Qo={href:"https://github.com/nushell/nushell/pull/6870",target:"_blank",rel:"noopener noreferrer"},Jo=e("Remove unnecessary "),Zo=t("code",null,"#[allow(...)]",-1),en=e(" annotations"),tn=e(", and "),on={href:"https://github.com/nushell/nushell/pull/6648",target:"_blank",rel:"noopener noreferrer"},nn=e("Reduce required dependencies for diagnostics"),sn=e("fdncred created "),ln={href:"https://github.com/nushell/nushell/pull/7038",target:"_blank",rel:"noopener noreferrer"},rn=e('Revert "Fix for escaping backslashes in interpolated strings (fixes #6737)"'),hn=e(", and "),an={href:"https://github.com/nushell/nushell/pull/7005",target:"_blank",rel:"noopener noreferrer"},_n=e("bump rust-toolchain to 1.64"),dn=e(", and "),cn={href:"https://github.com/nushell/nushell/pull/6982",target:"_blank",rel:"noopener noreferrer"},un=e("category tweak"),pn=e(", and "),fn={href:"https://github.com/nushell/nushell/pull/6963",target:"_blank",rel:"noopener noreferrer"},gn=e("change str distance to output value::int"),mn=e(", and "),bn={href:"https://github.com/nushell/nushell/pull/6962",target:"_blank",rel:"noopener noreferrer"},kn=e("tweak upsert help text"),wn=e(", and "),yn={href:"https://github.com/nushell/nushell/pull/6932",target:"_blank",rel:"noopener noreferrer"},vn=e("enable ability to upsert into a list like update"),xn=e(", and "),Rn={href:"https://github.com/nushell/nushell/pull/6814",target:"_blank",rel:"noopener noreferrer"},Nn=e("bump to dev version 0.70.1"),Pn=e("dandavison created "),Tn={href:"https://github.com/nushell/nushell/pull/7035",target:"_blank",rel:"noopener noreferrer"},In=e("Add accidentally missing tests of some command examples "),Un=e(", and "),Cn={href:"https://github.com/nushell/nushell/pull/7031",target:"_blank",rel:"noopener noreferrer"},Fn=e("Add an expected result to date format test"),Sn=e(", and "),An={href:"https://github.com/nushell/nushell/pull/6863",target:"_blank",rel:"noopener noreferrer"},Mn=e("Expose reedline EditCommand::Complete command"),Wn=e(", and "),Bn={href:"https://github.com/nushell/nushell/pull/6835",target:"_blank",rel:"noopener noreferrer"},Dn=e("Update reedline to fix history search filtering"),En=e(", and "),qn={href:"https://github.com/nushell/nushell/pull/6802",target:"_blank",rel:"noopener noreferrer"},jn=e("Tab inline completion"),Ln=e(", and "),Vn={href:"https://github.com/nushell/nushell/pull/6790",target:"_blank",rel:"noopener noreferrer"},zn=e("Minor cleanup: simplify and reduce allocations in pipeline data loop"),Gn=e("1Kinoti created "),$n={href:"https://github.com/nushell/nushell/pull/7021",target:"_blank",rel:"noopener noreferrer"},On=e("added some search-terms to the "),Yn=t("code",null,"platform",-1),Hn=e(" category"),Kn=e("gavinfoley created "),Xn={href:"https://github.com/nushell/nushell/pull/7020",target:"_blank",rel:"noopener noreferrer"},Qn=e("Fix for escaping backslashes in interpolated strings (fixes #6737)"),Jn=e("kubouch created "),Zn={href:"https://github.com/nushell/nushell/pull/7008",target:"_blank",rel:"noopener noreferrer"},es=e("Update contributing guide and PR template"),ts=e("dmatos2012 created "),os={href:"https://github.com/nushell/nushell/pull/7007",target:"_blank",rel:"noopener noreferrer"},ns=e("Rename column name from command to name for consistency"),ss=e(", and "),ls={href:"https://github.com/nushell/nushell/pull/6997",target:"_blank",rel:"noopener noreferrer"},rs=e("highlight term on PipelineData::Value()"),hs=e("SUPERCILEX created "),is={href:"https://github.com/nushell/nushell/pull/7006",target:"_blank",rel:"noopener noreferrer"},as=e("Run a round of clippy --fix to fix a ton of lints"),_s=e(", and "),ds={href:"https://github.com/nushell/nushell/pull/6975",target:"_blank",rel:"noopener noreferrer"},cs=e("Improve do command docs"),us=e("IanManske created "),ps={href:"https://github.com/nushell/nushell/pull/7001",target:"_blank",rel:"noopener noreferrer"},fs=e("Fix panic when encountering ENOTTY."),gs=e("WindSoilder created "),ms={href:"https://github.com/nushell/nushell/pull/6961",target:"_blank",rel:"noopener noreferrer"},bs=e("Refactor: finish refactor on commands which take optional cell paths."),ks=e(", and "),ws={href:"https://github.com/nushell/nushell/pull/6944",target:"_blank",rel:"noopener noreferrer"},ys=e("frently error message for access beyond end"),vs=e(", and "),xs={href:"https://github.com/nushell/nushell/pull/6879",target:"_blank",rel:"noopener noreferrer"},Rs=e("Refactor: introduce general "),Ns=t("code",null,"operate",-1),Ps=e(" commands to reduce duplicate code"),Ts=e(", and "),Is={href:"https://github.com/nushell/nushell/pull/6793",target:"_blank",rel:"noopener noreferrer"},Us=e("Allow captured stderr saving to file"),Cs=e("webbedspace created "),Fs={href:"https://github.com/nushell/nushell/pull/6951",target:"_blank",rel:"noopener noreferrer"},Ss=e("Fix "),As=t("code",null,"$in",-1),Ms=e(" in blocks given to "),Ws=t("code",null,"any",-1),Bs=e(" and "),Ds=t("code",null,"all",-1),Es=e(", and "),qs={href:"https://github.com/nushell/nushell/pull/6919",target:"_blank",rel:"noopener noreferrer"},js=e("Update merge to also take single records (closes #5281)"),Ls=e(", and "),Vs={href:"https://github.com/nushell/nushell/pull/6913",target:"_blank",rel:"noopener noreferrer"},zs=e("Further edits to help messages"),Gs=e(", and "),$s={href:"https://github.com/nushell/nushell/pull/6868",target:"_blank",rel:"noopener noreferrer"},Os=e("Mildly edited a small handful of help messages"),Ys=e("jenshnielsen created "),Hs={href:"https://github.com/nushell/nushell/pull/6949",target:"_blank",rel:"noopener noreferrer"},Ks=e("Use nt-api 4 on Windows"),Xs=e("rgwood created "),Qs={href:"https://github.com/nushell/nushell/pull/6948",target:"_blank",rel:"noopener noreferrer"},Js=e("Fix double cache read in CI"),Zs=e(", and "),el={href:"https://github.com/nushell/nushell/pull/6935",target:"_blank",rel:"noopener noreferrer"},tl=e("Fix feature flag for "),ol=t("code",null,"open-df",-1),nl=e(" test"),sl=e(", and "),ll={href:"https://github.com/nushell/nushell/pull/6923",target:"_blank",rel:"noopener noreferrer"},rl=e("Update PR template to mention user-facing changes"),hl=e(", and "),il={href:"https://github.com/nushell/nushell/pull/6892",target:"_blank",rel:"noopener noreferrer"},al=e("Improve error message for "),_l=t("code",null,"get 0",-1),dl=e(" on non-collection types"),cl=e(", and "),ul={href:"https://github.com/nushell/nushell/pull/6867",target:"_blank",rel:"noopener noreferrer"},pl=e("Support ranges in "),fl=t("code",null,"str substring",-1),gl=e(", and "),ml={href:"https://github.com/nushell/nushell/pull/6858",target:"_blank",rel:"noopener noreferrer"},bl=e("Fixes for "),kl=t("code",null,"ps",-1),wl=e(" on Linux"),yl=e(", and "),vl={href:"https://github.com/nushell/nushell/pull/6856",target:"_blank",rel:"noopener noreferrer"},xl=e("Print command help in base from+to commands"),Rl=e(", and "),Nl={href:"https://github.com/nushell/nushell/pull/6834",target:"_blank",rel:"noopener noreferrer"},Pl=e("Diagnostics logging streamlining+tweaks"),Tl=e("paper-lark created "),Il={href:"https://github.com/nushell/nushell/pull/6931",target:"_blank",rel:"noopener noreferrer"},Ul=e("Fix bug with alias handling when searching for matching brackets"),Cl=e(", and "),Fl={href:"https://github.com/nushell/nushell/pull/6655",target:"_blank",rel:"noopener noreferrer"},Sl=e("Highlight matching brackets / parentheses"),Al=e("PerBothner created "),Ml={href:"https://github.com/nushell/nushell/pull/6915",target:"_blank",rel:"noopener noreferrer"},Wl=e('New "display_output" hook.'),Bl=e("kambala-decapitator created "),Dl={href:"https://github.com/nushell/nushell/pull/6912",target:"_blank",rel:"noopener noreferrer"},El=e("fix description of build-string's second example"),ql=e("melMass created "),jl={href:"https://github.com/nushell/nushell/pull/6904",target:"_blank",rel:"noopener noreferrer"},Ll=e('fix: \u2728 "saner" default for mv'),Vl=e(", and "),zl={href:"https://github.com/nushell/nushell/pull/6903",target:"_blank",rel:"noopener noreferrer"},Gl=e(`docs: \u{1F4DD} add "map" to each's search terms`),$l=e("zhiburt created "),Ol={href:"https://github.com/nushell/nushell/pull/6884",target:"_blank",rel:"noopener noreferrer"},Yl=e("[WIP] table: Show truncated record differently"),Hl=e(", and "),Kl={href:"https://github.com/nushell/nushell/pull/6850",target:"_blank",rel:"noopener noreferrer"},Xl=e("table/ Fix paging indexing"),Ql=e(", and "),Jl={href:"https://github.com/nushell/nushell/pull/6847",target:"_blank",rel:"noopener noreferrer"},Zl=t("code",null,"table -e",-1),er=e(" Fix stackoverflow (cause endless empty list)"),tr=e(", and "),or={href:"https://github.com/nushell/nushell/pull/6842",target:"_blank",rel:"noopener noreferrer"},nr=t("code",null,"table -e",-1),sr=e(" align key to 2nd line"),lr=e(", and "),rr={href:"https://github.com/nushell/nushell/pull/6710",target:"_blank",rel:"noopener noreferrer"},hr=e("nu-table: Check perf improvements"),ir=e("FilipAndersson245 created "),ar={href:"https://github.com/nushell/nushell/pull/6865",target:"_blank",rel:"noopener noreferrer"},_r=e("Bumps windows dependencie"),dr=e("nibon7 created "),cr={href:"https://github.com/nushell/nushell/pull/6860",target:"_blank",rel:"noopener noreferrer"},ur=e("path: fix error message"),pr=e(", and "),fr={href:"https://github.com/nushell/nushell/pull/6837",target:"_blank",rel:"noopener noreferrer"},gr=e("rm: don't update target_exists every time in the loop"),mr=e(", and "),br={href:"https://github.com/nushell/nushell/pull/6836",target:"_blank",rel:"noopener noreferrer"},kr=e("Add missing "),wr=t("code",null,"shape_directory",-1),yr=e(" to default_config.nu"),vr=e(", and "),xr={href:"https://github.com/nushell/nushell/pull/6815",target:"_blank",rel:"noopener noreferrer"},Rr=e("rm: fix error span when targets doesn't exists"),Nr=e(", and "),Pr={href:"https://github.com/nushell/nushell/pull/6781",target:"_blank",rel:"noopener noreferrer"},Tr=e("Add support to render right prompt on last line of the prompt"),Ir=e(", and "),Ur={href:"https://github.com/nushell/nushell/pull/6701",target:"_blank",rel:"noopener noreferrer"},Cr=e("Prepend directory to the binary tarball"),Fr=e("hustcer created "),Sr={href:"https://github.com/nushell/nushell/pull/6841",target:"_blank",rel:"noopener noreferrer"},Ar=e("Update ci workflow actions, fix #6713"),Mr=e("ChrisDenton created "),Wr={href:"https://github.com/nushell/nushell/pull/6824",target:"_blank",rel:"noopener noreferrer"},Br=e("Try not to use verbatim paths for UNC shares"),Dr=e("Decodetalkers created "),Er={href:"https://github.com/nushell/nushell/pull/6799",target:"_blank",rel:"noopener noreferrer"},qr=e("fix: fixcd"),jr=e(", and "),Lr={href:"https://github.com/nushell/nushell/pull/6791",target:"_blank",rel:"noopener noreferrer"},Vr=e("feat: coredump"),zr=e("merelymyself created "),Gr={href:"https://github.com/nushell/nushell/pull/6766",target:"_blank",rel:"noopener noreferrer"},$r=e("make "),Or=t("code",null,"++",-1),Yr=e(" append lists"),Hr=e(", and "),Kr={href:"https://github.com/nushell/nushell/pull/6752",target:"_blank",rel:"noopener noreferrer"},Xr=e("add more helpful error for calling a decl that exists in a module"),Qr=t("h2",{id:"extension",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#extension","aria-hidden":"true"},"#"),e(" Extension")],-1),Jr=e("melMass created "),Zr={href:"https://github.com/nushell/vscode-nushell-lang/pull/68",target:"_blank",rel:"noopener noreferrer"},eh=e("fix: \u26A1\uFE0F add path for arm brew"),th=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),oh=e("kubouch created "),nh={href:"https://github.com/nushell/nushell.github.io/pull/664",target:"_blank",rel:"noopener noreferrer"},sh=e("Add review process change"),lh=e(", and "),rh={href:"https://github.com/nushell/nushell.github.io/pull/612",target:"_blank",rel:"noopener noreferrer"},hh=e("Update Modules and Overlays chapters"),ih=e("webbedspace created "),ah={href:"https://github.com/nushell/nushell.github.io/pull/663",target:"_blank",rel:"noopener noreferrer"},_h=e("Fix let-env Path example to be accurate for Windows"),dh=e(", and "),ch={href:"https://github.com/nushell/nushell.github.io/pull/661",target:"_blank",rel:"noopener noreferrer"},uh=e("Update types_of_data.md"),ph=e(", and "),fh={href:"https://github.com/nushell/nushell.github.io/pull/660",target:"_blank",rel:"noopener noreferrer"},gh=e("Updated working_with_strings.md (closes #640)"),mh=e(", and "),bh={href:"https://github.com/nushell/nushell.github.io/pull/657",target:"_blank",rel:"noopener noreferrer"},kh=e("Simplified examples by removing unneeded "),wh=t("code",null,"echo",-1),yh=e(" calls"),vh=e(", and "),xh={href:"https://github.com/nushell/nushell.github.io/pull/646",target:"_blank",rel:"noopener noreferrer"},Rh=e("Add categories column to command_reference"),Nh=e("PerBothner created "),Ph={href:"https://github.com/nushell/nushell.github.io/pull/662",target:"_blank",rel:"noopener noreferrer"},Th=e("Document display_output hook"),Ih=e("dmatos2012 created "),Uh={href:"https://github.com/nushell/nushell.github.io/pull/659",target:"_blank",rel:"noopener noreferrer"},Ch=e("docs: document changes from #7007"),Fh=e("seanbuckley created "),Sh={href:"https://github.com/nushell/nushell.github.io/pull/655",target:"_blank",rel:"noopener noreferrer"},Ah=e("Update oh-my-posh install link"),Mh=e("rapenne-s created "),Wh={href:"https://github.com/nushell/nushell.github.io/pull/654",target:"_blank",rel:"noopener noreferrer"},Bh=e("Mention nushell also run on BSD systems"),Dh=e("melMass created "),Eh={href:"https://github.com/nushell/nushell.github.io/pull/653",target:"_blank",rel:"noopener noreferrer"},qh=e("docs: documents the changes to mv (branch release 0.71)"),jh=e("nibon7 created "),Lh={href:"https://github.com/nushell/nushell.github.io/pull/651",target:"_blank",rel:"noopener noreferrer"},Vh=e("add right prompt guide"),zh=e(", and "),Gh={href:"https://github.com/nushell/nushell.github.io/pull/650",target:"_blank",rel:"noopener noreferrer"},$h=e("add right prompt release notes"),Oh=e("kambala-decapitator created "),Yh={href:"https://github.com/nushell/nushell.github.io/pull/649",target:"_blank",rel:"noopener noreferrer"},Hh=e("fix description of build-string's second example"),Kh=e("hustcer created "),Xh={href:"https://github.com/nushell/nushell.github.io/pull/644",target:"_blank",rel:"noopener noreferrer"},Qh=e("Refresh commands docs for nu v0.70"),Jh=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu scripts")],-1),Zh=e("fdncred created "),ei={href:"https://github.com/nushell/nu_scripts/pull/311",target:"_blank",rel:"noopener noreferrer"},ti=e("oh-my-nu-v2 script - a new prompt for 8bit/24bit terminals"),oi=e(", and "),ni={href:"https://github.com/nushell/nu_scripts/pull/308",target:"_blank",rel:"noopener noreferrer"},si=e("tweak no back progress bar example"),li=e("1Kinoti created "),ri={href:"https://github.com/nushell/nu_scripts/pull/310",target:"_blank",rel:"noopener noreferrer"},hi=e("Make the default for the "),ii=t("code",null,"up",-1),ai=e(" command (in the filesystem directory) 1"),_i=e("SUPERCILEX created "),di={href:"https://github.com/nushell/nu_scripts/pull/309",target:"_blank",rel:"noopener noreferrer"},ci=e("Add prompt with exit code and command duration"),ui=e("WindSoilder created "),pi={href:"https://github.com/nushell/nu_scripts/pull/307",target:"_blank",rel:"noopener noreferrer"},fi=e("fix conda deactivate error when activate with no-prompt"),gi=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" Reedline")],-1),mi=e("sholderbach created "),bi={href:"https://github.com/nushell/reedline/pull/512",target:"_blank",rel:"noopener noreferrer"},ki=e("Use "),wi=t("code",null,"Box::default()",-1),yi=e(" in more places"),vi=e(", and "),xi={href:"https://github.com/nushell/reedline/pull/511",target:"_blank",rel:"noopener noreferrer"},Ri=e("Prepare the "),Ni=t("code",null,"0.14.0",-1),Pi=e(" release"),Ti=e(", and "),Ii={href:"https://github.com/nushell/reedline/pull/510",target:"_blank",rel:"noopener noreferrer"},Ui=e("Fix the additional moves of normal mode "),Ci=t("code",null,"hjkl",-1),Fi=e(", and "),Si={href:"https://github.com/nushell/reedline/pull/506",target:"_blank",rel:"noopener noreferrer"},Ai=e("Split the main example binary into examples"),Mi=e(", and "),Wi={href:"https://github.com/nushell/reedline/pull/505",target:"_blank",rel:"noopener noreferrer"},Bi=e("Update workflow to new actions (alternative)"),Di=e("jcgruenhage created "),Ei={href:"https://github.com/nushell/reedline/pull/504",target:"_blank",rel:"noopener noreferrer"},qi=e("fix: actually use sqlite-dynlib feature"),ji=e("nibon7 created "),Li={href:"https://github.com/nushell/reedline/pull/501",target:"_blank",rel:"noopener noreferrer"},Vi=e("show right prompt on indicator line in last line mode"),zi=e(", and "),Gi={href:"https://github.com/nushell/reedline/pull/492",target:"_blank",rel:"noopener noreferrer"},$i=e("render right prompt on the last line of the left prompt"),Oi=e("perlindgren created "),Yi={href:"https://github.com/nushell/reedline/pull/500",target:"_blank",rel:"noopener noreferrer"},Hi=e("Custom validator and prompt code examples"),Ki=e("dandavison created "),Xi={href:"https://github.com/nushell/reedline/pull/498",target:"_blank",rel:"noopener noreferrer"},Qi=e("Tab inline completion"),Ji=e("CozyPenguin created "),Zi={href:"https://github.com/nushell/reedline/pull/494",target:"_blank",rel:"noopener noreferrer"},ea=e("change cursor shape depending on edit mode");function ta(oa,na){const o=r("ExternalLinkIcon");return h(),i("div",null,[u,p,f,a(" more "),g,t("p",null,[m,t("a",b,[k,n(o)]),w,t("a",y,[v,n(o)]),x,R,N]),P,t("p",null,[T,t("a",I,[U,C,n(o)]),F]),S,t("ul",null,[t("li",null,[t("p",null,[A,t("a",M,[W,n(o)]),B,D,E])]),t("li",null,[t("p",null,[q,t("a",j,[L,V,n(o)]),z])]),t("li",null,[t("p",null,[G,$,t("a",O,[Y,n(o)]),H])]),t("li",null,[t("p",null,[K,X,t("a",Q,[J,n(o)]),Z])]),t("li",null,[t("p",null,[ee,te,oe,ne,t("a",se,[le,n(o)]),re])])]),he,t("p",null,[ie,t("a",ae,[_e,n(o)]),de,ce,ue,pe,fe]),ge,t("p",null,[me,t("a",be,[ke,we,n(o)]),ye]),ve,xe,Re,t("p",null,[Ne,t("a",Pe,[Te,n(o)]),Ie]),t("ol",null,[t("li",null,[Ue,t("a",Ce,[Fe,n(o)]),Se,t("a",Ae,[Me,n(o)]),We]),Be,De,Ee,qe,t("li",null,[je,t("a",Le,[Ve,n(o)]),ze]),Ge]),$e,Oe,Ye,He,Ke,t("ul",null,[t("li",null,[Xe,Qe,Je,Ze,et,tt,ot,nt,st,t("a",lt,[rt,n(o)]),ht]),t("li",null,[it,at,_t,dt,ct,ut,pt,ft,gt,t("a",mt,[bt,n(o)]),kt]),t("li",null,[wt,yt,vt,xt,Rt,Nt,Pt,t("a",Tt,[It,n(o)]),Ut]),Ct,t("li",null,[Ft,St,At,t("a",Mt,[Wt,n(o)])])]),Bt,t("p",null,[Dt,t("a",Et,[qt,n(o)]),jt,t("a",Lt,[Vt,n(o)]),zt]),Gt,$t,t("ul",null,[t("li",null,[Ot,t("a",Yt,[Ht,n(o)]),Kt,t("a",Xt,[Qt,n(o)])]),t("li",null,[Jt,t("a",Zt,[eo,to,oo,n(o)]),no,t("a",so,[lo,n(o)]),ro,t("a",ho,[io,n(o)]),ao,t("a",_o,[co,n(o)]),uo,t("a",po,[fo,go,mo,n(o)]),bo,t("a",ko,[wo,yo,n(o)]),vo,t("a",xo,[Ro,n(o)]),No,t("a",Po,[To,n(o)]),Io,t("a",Uo,[Co,n(o)]),Fo,t("a",So,[Ao,Mo,Wo,Bo,Do,n(o)]),Eo,t("a",qo,[jo,Lo,Vo,n(o)]),zo,t("a",Go,[$o,Oo,Yo,Ho,Ko,n(o)]),Xo,t("a",Qo,[Jo,Zo,en,n(o)]),tn,t("a",on,[nn,n(o)])]),t("li",null,[sn,t("a",ln,[rn,n(o)]),hn,t("a",an,[_n,n(o)]),dn,t("a",cn,[un,n(o)]),pn,t("a",fn,[gn,n(o)]),mn,t("a",bn,[kn,n(o)]),wn,t("a",yn,[vn,n(o)]),xn,t("a",Rn,[Nn,n(o)])]),t("li",null,[Pn,t("a",Tn,[In,n(o)]),Un,t("a",Cn,[Fn,n(o)]),Sn,t("a",An,[Mn,n(o)]),Wn,t("a",Bn,[Dn,n(o)]),En,t("a",qn,[jn,n(o)]),Ln,t("a",Vn,[zn,n(o)])]),t("li",null,[Gn,t("a",$n,[On,Yn,Hn,n(o)])]),t("li",null,[Kn,t("a",Xn,[Qn,n(o)])]),t("li",null,[Jn,t("a",Zn,[es,n(o)])]),t("li",null,[ts,t("a",os,[ns,n(o)]),ss,t("a",ls,[rs,n(o)])]),t("li",null,[hs,t("a",is,[as,n(o)]),_s,t("a",ds,[cs,n(o)])]),t("li",null,[us,t("a",ps,[fs,n(o)])]),t("li",null,[gs,t("a",ms,[bs,n(o)]),ks,t("a",ws,[ys,n(o)]),vs,t("a",xs,[Rs,Ns,Ps,n(o)]),Ts,t("a",Is,[Us,n(o)])]),t("li",null,[Cs,t("a",Fs,[Ss,As,Ms,Ws,Bs,Ds,n(o)]),Es,t("a",qs,[js,n(o)]),Ls,t("a",Vs,[zs,n(o)]),Gs,t("a",$s,[Os,n(o)])]),t("li",null,[Ys,t("a",Hs,[Ks,n(o)])]),t("li",null,[Xs,t("a",Qs,[Js,n(o)]),Zs,t("a",el,[tl,ol,nl,n(o)]),sl,t("a",ll,[rl,n(o)]),hl,t("a",il,[al,_l,dl,n(o)]),cl,t("a",ul,[pl,fl,n(o)]),gl,t("a",ml,[bl,kl,wl,n(o)]),yl,t("a",vl,[xl,n(o)]),Rl,t("a",Nl,[Pl,n(o)])]),t("li",null,[Tl,t("a",Il,[Ul,n(o)]),Cl,t("a",Fl,[Sl,n(o)])]),t("li",null,[Al,t("a",Ml,[Wl,n(o)])]),t("li",null,[Bl,t("a",Dl,[El,n(o)])]),t("li",null,[ql,t("a",jl,[Ll,n(o)]),Vl,t("a",zl,[Gl,n(o)])]),t("li",null,[$l,t("a",Ol,[Yl,n(o)]),Hl,t("a",Kl,[Xl,n(o)]),Ql,t("a",Jl,[Zl,er,n(o)]),tr,t("a",or,[nr,sr,n(o)]),lr,t("a",rr,[hr,n(o)])]),t("li",null,[ir,t("a",ar,[_r,n(o)])]),t("li",null,[dr,t("a",cr,[ur,n(o)]),pr,t("a",fr,[gr,n(o)]),mr,t("a",br,[kr,wr,yr,n(o)]),vr,t("a",xr,[Rr,n(o)]),Nr,t("a",Pr,[Tr,n(o)]),Ir,t("a",Ur,[Cr,n(o)])]),t("li",null,[Fr,t("a",Sr,[Ar,n(o)])]),t("li",null,[Mr,t("a",Wr,[Br,n(o)])]),t("li",null,[Dr,t("a",Er,[qr,n(o)]),jr,t("a",Lr,[Vr,n(o)])]),t("li",null,[zr,t("a",Gr,[$r,Or,Yr,n(o)]),Hr,t("a",Kr,[Xr,n(o)])])]),Qr,t("ul",null,[t("li",null,[Jr,t("a",Zr,[eh,n(o)])])]),th,t("ul",null,[t("li",null,[oh,t("a",nh,[sh,n(o)]),lh,t("a",rh,[hh,n(o)])]),t("li",null,[ih,t("a",ah,[_h,n(o)]),dh,t("a",ch,[uh,n(o)]),ph,t("a",fh,[gh,n(o)]),mh,t("a",bh,[kh,wh,yh,n(o)]),vh,t("a",xh,[Rh,n(o)])]),t("li",null,[Nh,t("a",Ph,[Th,n(o)])]),t("li",null,[Ih,t("a",Uh,[Ch,n(o)])]),t("li",null,[Fh,t("a",Sh,[Ah,n(o)])]),t("li",null,[Mh,t("a",Wh,[Bh,n(o)])]),t("li",null,[Dh,t("a",Eh,[qh,n(o)])]),t("li",null,[jh,t("a",Lh,[Vh,n(o)]),zh,t("a",Gh,[$h,n(o)])]),t("li",null,[Oh,t("a",Yh,[Hh,n(o)])]),t("li",null,[Kh,t("a",Xh,[Qh,n(o)])])]),Jh,t("ul",null,[t("li",null,[Zh,t("a",ei,[ti,n(o)]),oi,t("a",ni,[si,n(o)])]),t("li",null,[li,t("a",ri,[hi,ii,ai,n(o)])]),t("li",null,[_i,t("a",di,[ci,n(o)])]),t("li",null,[ui,t("a",pi,[fi,n(o)])])]),gi,t("ul",null,[t("li",null,[mi,t("a",bi,[ki,wi,yi,n(o)]),vi,t("a",xi,[Ri,Ni,Pi,n(o)]),Ti,t("a",Ii,[Ui,Ci,n(o)]),Fi,t("a",Si,[Ai,n(o)]),Mi,t("a",Wi,[Bi,n(o)])]),t("li",null,[Di,t("a",Ei,[qi,n(o)])]),t("li",null,[ji,t("a",Li,[Vi,n(o)]),zi,t("a",Gi,[$i,n(o)])]),t("li",null,[Oi,t("a",Yi,[Hi,n(o)])]),t("li",null,[Ki,t("a",Xi,[Qi,n(o)])]),t("li",null,[Ji,t("a",Zi,[ea,n(o)])])])])}const la=l(c,[["render",ta],["__file","2022-11-08-nushell-0.71.html.vue"]]);export{la as default};
