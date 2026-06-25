import { useState, useEffect } from 'react'
import { Target, Shield, BookOpen, Heart, CheckCircle, Clock, MessageSquare, Filter, TrendingUp, Users, Camera, Dumbbell, Zap, Home, AlertTriangle, Calendar, Sparkles, Brain, Lock, Monitor, PauseCircle, Anchor, Dumbbell as Gym, Eye, Timer, Play } from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('padrao')
  const [isPWA, setIsPWA] = useState(false)

  useEffect(() => {
    // Detect if running as PWA (installed app)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        window.navigator.standalone === true ||
                        document.referrer.includes('android-app://')
    setIsPWA(isStandalone)
  }, [])

  const sections = [
    { id: 'padrao', title: 'O Padrão Inegociável', icon: Shield },
    { id: 'domestico', title: 'Código Doméstico', icon: Home },
    { id: 'foco', title: 'Gestão de Foco', icon: Brain },
    { id: 'academia', title: 'Academia dos Focados', icon: Gym },
    { id: 'machado', title: 'Afiando o Machado', icon: Target },
    { id: 'vitrine', title: 'Vitrine de Autoridade', icon: BookOpen },
    { id: 'fortaleza', title: 'A Fortaleza Pessoal', icon: Heart },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header - oculto quando instalado como PWA */}
      {!isPWA && (
        <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-white">Mapa de Vida</h1>
            <p className="text-slate-400 text-sm mt-1">Caminho para a Excelência como Prestador de Serviço</p>
          </div>
        </header>
      )}

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((section) => {
              const Icon = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{section.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'padrao' && <PadraoInegociavel />}
        {activeSection === 'domestico' && <CodigoDomestico />}
        {activeSection === 'foco' && <GestaoFoco />}
        {activeSection === 'academia' && <AcademiaFocados />}
        {activeSection === 'machado' && <AfiandoMachado />}
        {activeSection === 'vitrine' && <VitrineAutoridade />}
        {activeSection === 'fortaleza' && <FortalezaPessoal />}
      </main>
    </div>
  )
}

function PadraoInegociavel() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Shield className="text-blue-500" size={24} />
            Código de Conduta Profissional
          </h2>
          <p className="text-slate-400">A constituição que garante reconhecimento como profissional acima da média.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<CheckCircle className="text-green-500" size={32} />}
          title="Precisão e Qualidade"
          description="Compromisso inabalável com a entrega perfeita, seja garantindo um código limpo e escalável ou o acabamento impecável e exato de uma peça física."
          color="green"
        />
        <Card
          icon={<Clock className="text-yellow-500" size={32} />}
          title="Gestão de Expectativas e Prazos"
          description="Regras rígidas sobre como estimar o tempo de um projeto, adicionando margem de segurança para garantir que o combinado seja cumprido sem estresse."
          color="yellow"
        />
        <Card
          icon={<MessageSquare className="text-blue-500" size={32} />}
          title="Comunicação Proativa"
          description="Protocolos para manter quem te contratou informado sobre o progresso e os obstáculos, assumindo a responsabilidade do projeto antes mesmo de ser questionado."
          color="blue"
        />
        <Card
          icon={<Filter className="text-purple-500" size={32} />}
          title="Filtro de Decisão"
          description="Checklist para avaliar se uma nova oportunidade está alinhada com seus valores centrais e capacidade de entrega com excelência."
          color="purple"
        />
      </div>
    </div>
  )
}

function CodigoDomestico() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Home className="text-indigo-500" size={24} />
            Código de Conduta Doméstico
          </h2>
          <p className="text-slate-400">Guia impecável para convivência harmoniosa e organização em casa com mãe, irmão (18), irmã (11) e padrasto.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<Sparkles className="text-indigo-500" size={32} />}
          title="Organização Pessoal"
          description="Tudo tem seu lugar. Roupas dobradas e guardadas imediatamente após uso. Ferramentas e materiais de trabalho organizados. Bagunça zero no quarto e área de trabalho."
          color="indigo"
        />
        <Card
          icon={<AlertTriangle className="text-orange-500" size={32} />}
          title="Respeito ao Espaço Comum"
          description="Cozinha e banheiro limpos após uso. Não deixar louça acumular. Respeitar horários de silêncio. Cuidar da casa como se fosse sua própria empresa."
          color="orange"
        />
        <Card
          icon={<Calendar className="text-teal-500" size={32} />}
          title="Contribuição Ativa"
          description="Participar das tarefas domésticas sem ser cobrado. Antecipar necessidades da casa. Ser proativo na manutenção do ambiente familiar."
          color="teal"
        />
        <Card
          icon={<MessageSquare className="text-pink-500" size={32} />}
          title="Comunicação Respeitosa"
          description="Falar com calma e respeito com todos. Evitar conflitos desnecessários. Escutar antes de responder. Manter tom de voz adequado."
          color="pink"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Regras de Ouro</h3>
        <div className="space-y-3">
          <RuleItem text="Se usou, limpe. Se moveu, organize. Se sujou, lave." />
          <RuleItem text="Respeite o sono e descanso de todos em casa." />
          <RuleItem text="Comunique antecipadamente sobre ausências ou atrasos." />
          <RuleItem text="Não deixe nada para depois. O agora é o momento." />
          <RuleItem text="Seja exemplo para o irmão mais novo e parceiro para o mais velho." />
          <RuleItem text="Valorize a presença e esforço da mãe e padrasto." />
          <RuleItem text="Mantenha seu quarto como um santuário de organização." />
          <RuleItem text="Use sua inteligência para resolver problemas, não criar conflitos." />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Checklist Diário de Organização</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-400 mb-2">Manhã</h4>
            <ChecklistItem text="Cama arrumada ao acordar" />
            <ChecklistItem text="Roupas do dia anterior organizadas" />
            <ChecklistItem text="Banheiro limpo após uso" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-400 mb-2">Noite</h4>
            <ChecklistItem text="Louça lavada e guardada" />
            <ChecklistItem text="Quarto organizado antes de dormir" />
            <ChecklistItem text="Ferramentas e materiais guardados" />
          </div>
        </div>
      </div>
    </div>
  )
}

function GestaoFoco() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Brain className="text-violet-500" size={24} />
            Gestão de Foco e Atenção
          </h2>
          <p className="text-slate-400">Protocolos para canalizar mente acelerada e eliminar desconcentração instantânea.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<Lock className="text-violet-500" size={32} />}
          title="Protocolo de Objetos (Chaves, Celular, etc)"
          description="LUGAR ÚNICO E IMUTÁVEL para cada objeto. Chaves sempre no mesmo pote na entrada. Celular sempre no mesmo local ao chegar. Não existe 'depois', é agora."
          color="violet"
        />
        <Card
          icon={<Monitor className="text-blue-500" size={32} />}
          title="Gestão de Abas e Janelas"
          description="Máximo de 5 abas por vez. Se abrir nova, feche outra. Use extensões de session manager. Agrupe por projeto. Limpe o desktop diariamente."
          color="blue"
        />
        <Card
          icon={<PauseCircle className="text-emerald-500" size={32} />}
          title="Pausas Estratégicas (Pomodoro)"
          description="25 minutos foco total + 5 minutos pausa. Durante o foco: nada de celular, notificações desligadas. Na pausa: levante, alongue, não olhe telas."
          color="emerald"
        />
        <Card
          icon={<Anchor className="text-amber-500" size={32} />}
          title="Ancoragem de Atenção"
          description="Ao sentir mente acelerada: pare, respire fundo 3x, nomeie o que está fazendo agora. Volte ao presente. Não lute contra, redirecione."
          color="amber"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Protocolo de Emergência: Mente Acelerada</h3>
        <div className="space-y-3">
          <EmergencyStep step="1" text="PARE tudo. Não tente continuar." />
          <EmergencyStep step="2" text="Respire fundo: 4 segundos inala, 4 segura, 4 exala." />
          <EmergencyStep step="3" text="Nomeie 5 coisas que você vê ao seu redor." />
          <EmergencyStep step="4" text="Escreva em papel: O que eu estava fazendo?" />
          <EmergencyStep step="5" text="Retorne apenas à tarefa principal. Uma coisa por vez." />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Sistema de Lugares Fixos</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-400 mb-2">Entrada/Casa</h4>
            <FixedPlace item="Chaves" place="Pote na entrada, sempre" />
            <FixedPlace item="Carteira" place="Gaveta específica" />
            <FixedPlace item="Celular" place="Suporte na mesa de trabalho" />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-slate-400 mb-2">Trabalho</h4>
            <FixedPlace item="Ferramentas" place="Caixa organizada por tipo" />
            <FixedPlace item="Documentos" place="Pasta por projeto" />
            <FixedPlace item="Canetas" place="Porta-canetas único" />
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Regras de Computador</h3>
        <div className="space-y-3">
          <RuleItem text="Máximo 5 abas abertas simultaneamente." />
          <RuleItem text="Desktop limpo antes de começar o dia." />
          <RuleItem text="Notificações desligadas durante trabalho focado." />
          <RuleItem text="Uma janela por projeto. Não misture contextos." />
          <RuleItem text="Fechar tudo ao terminar. Não deixar 'para depois'." />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Técnica de Uma Coisa Por Vez</h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-violet-500">
            <p className="text-slate-300 text-sm mb-2">Antes de começar qualquer tarefa:</p>
            <p className="text-white font-medium">"O que eu vou fazer AGORA?"</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-violet-500">
            <p className="text-slate-300 text-sm mb-2">Durante a tarefa:</p>
            <p className="text-white font-medium">"Isso é o que eu decidi fazer agora?"</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-violet-500">
            <p className="text-slate-300 text-sm mb-2">Se a mente divagar:</p>
            <p className="text-white font-medium">"Volte. Uma coisa por vez."</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AcademiaFocados() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Gym className="text-rose-500" size={24} />
            Academia dos Focados
          </h2>
          <p className="text-slate-400">Treinos mentais para desenvolver visão sutil e clareza instantânea do que precisa ser feito.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<Eye className="text-rose-500" size={32} />}
          title="Treino 1: Escaneamento Visual"
          description="Olhe ao redor por 30 segundos. Nomeie mentalmente 10 objetos. Depois, feche os olhos e recite. Treina atenção aos detalhes e memória visual."
          color="rose"
        />
        <Card
          icon={<Timer className="text-cyan-500" size={32} />}
          title="Treino 2: Foco em Um Ponto"
          description="Escolha um objeto. Olhe fixo por 2 minutos sem desviar. Se a mente vagar, retorne suavemente. Desenvolve capacidade de sustentação."
          color="cyan"
        />
        <Card
          icon={<Play className="text-lime-500" size={32} />}
          title="Treino 3: Sequência Lógica"
          description="Antes de qualquer ação, pause e visualize: 1) O que preciso fazer? 2) Em que ordem? 3) O que vem depois? Cria hábito de planejamento."
          color="lime"
        />
        <Card
          icon={<Brain className="text-fuchsia-500" size={32} />}
          title="Treino 4: Filtramento de Ruído"
          description="Em ambiente com múltiplos estímulos, identifique apenas o essencial. Ignore o resto. Treina seletividade mental e priorização."
          color="fuchsia"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Treino Diário: Visão de Águia</h3>
        <div className="space-y-4">
          <WorkoutStep
            time="5 min"
            title="Aquecimento: Escaneamento"
            description="Olhe ao redor e nomeie 15 objetos. Depois feche os olhos e liste mentalmente."
          />
          <WorkoutStep
            time="10 min"
            title="Principal: Foco Sustentado"
            description="Escolha uma tarefa simples (dobrar roupa, organizar documentos). Faça com atenção total. Se a mente vagar, retorne imediatamente."
          />
          <WorkoutStep
            time="5 min"
            title="Resfriamento: Revisão"
            description="O que eu fiz? O que ficou pendente? O que vem agora? Escreva em papel."
          />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Treino Avançado: Decisão em 3 Segundos</h3>
        <div className="space-y-3">
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-rose-500">
            <p className="text-white font-medium mb-2">Situação: Múltiplas tarefas aparecendo</p>
            <p className="text-slate-300 text-sm">1. PARE. Não reaja automaticamente.</p>
            <p className="text-slate-300 text-sm">2. PERGUNTE: "Qual é a ÚNICA coisa mais importante agora?"</p>
            <p className="text-slate-300 text-sm">3. DECIDA: Escolha uma. Ignore as outras temporariamente.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg border-l-4 border-rose-500">
            <p className="text-white font-medium mb-2">Prática diária:</p>
            <p className="text-slate-300 text-sm">Ao sentir sobrecarga, aplique os 3 segundos. Não pense muito. A primeira resposta intuitiva geralmente é a certa.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Treino de Priorização Visual</h3>
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <h4 className="text-white font-medium mb-2">Passo 1: Lista Visual</h4>
            <p className="text-slate-400 text-sm">Escreva todas as tarefas em post-its. Uma por post-it.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <h4 className="text-white font-medium mb-2">Passo 2: Categorização</h4>
            <p className="text-slate-400 text-sm">Separe em 3 colunas: URGENTE, IMPORTANTE, DEPOIS.</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <h4 className="text-white font-medium mb-2">Passo 3: Seleção</h4>
            <p className="text-slate-400 text-sm">Escolha APENAS uma da coluna URGENTE. Faça. Depois repita.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Progressão Semanal</h3>
        <div className="space-y-3">
          <WeeklyProgress day="Segunda" focus="Escaneamento Visual" level="Iniciante" />
          <WeeklyProgress day="Terça" focus="Foco em Um Ponto" level="Iniciante" />
          <WeeklyProgress day="Quarta" focus="Sequência Lógica" level="Intermediário" />
          <WeeklyProgress day="Quinta" focus="Filtramento de Ruído" level="Intermediário" />
          <WeeklyProgress day="Sexta" focus="Decisão em 3 Segundos" level="Avançado" />
          <WeeklyProgress day="Sábado" focus="Priorização Visual" level="Avançado" />
          <WeeklyProgress day="Domingo" focus="Revisão e Integração" level="Mestre" />
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Registros de Progresso</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-800/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-rose-500 mb-1">0</p>
            <p className="text-slate-400 text-sm">Treinos Completados</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-cyan-500 mb-1">0</p>
            <p className="text-slate-400 text-sm">Dias Consecutivos</p>
          </div>
          <div className="p-4 bg-slate-800/50 rounded-lg text-center">
            <p className="text-3xl font-bold text-lime-500 mb-1">0</p>
            <p className="text-slate-400 text-sm">Nível Atual</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AfiandoMachado() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Target className="text-orange-500" size={24} />
            Evolução Técnica
          </h2>
          <p className="text-slate-400">A estagnação não é uma opção. Domínio contínuo das ferramentas.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<TrendingUp className="text-orange-500" size={32} />}
          title="Aprofundamento Técnico"
          description="Metas de estudo focado para dominar as nuances das suas ferramentas, como arquiteturas complexas em Laravel e Django, ou novas técnicas de montagem."
          color="orange"
        />
        <Card
          icon={<BookOpen className="text-cyan-500" size={32} />}
          title="Repositório de Soluções"
          description="Diário técnico para registrar problemas enfrentados, erros cometidos e as soluções aplicadas. Evita retrabalho e acelera a resolução no futuro."
          color="cyan"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Metas de Estudo Atuais</h3>
        <div className="space-y-3">
          <GoalItem title="Arquitetura Laravel Avançada" progress={60} />
          <GoalItem title="Django REST Framework" progress={30} />
          <GoalItem title="Técnicas de Montagem de Precisão" progress={75} />
        </div>
      </div>
    </div>
  )
}

function VitrineAutoridade() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <BookOpen className="text-emerald-500" size={24} />
            Vitrine de Autoridade
          </h2>
          <p className="text-slate-400">Construindo confiança local e digital através de posicionamento estratégico.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<Camera className="text-emerald-500" size={32} />}
          title="Documentação do Processo"
          description="Rotina para capturar o antes, durante e depois dos seus projetos, mostrando a complexidade dos bastidores nas suas redes sociais."
          color="emerald"
        />
        <Card
          icon={<Users className="text-pink-500" size={32} />}
          title="Filtro de Clientes"
          description="Parâmetros para identificar e focar nos clientes certos, aqueles que valorizam soluções sob medida e estão dispostos a pagar pelo seu nível de detalhe."
          color="pink"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Critérios de Cliente Ideal</h3>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>Valoriza qualidade e precisão acima de preço</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>Respeita prazos e processos profissionais</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>Busca soluções personalizadas, não genéricas</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
            <span>Comunica claramente expectativas e necessidades</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

function FortalezaPessoal() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop)' }} />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
            <Heart className="text-red-500" size={24} />
            A Fortaleza Pessoal
          </h2>
          <p className="text-slate-400">A excelência na entrega exige capacidade física e mental sustentável.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<Dumbbell className="text-red-500" size={32} />}
          title="Consistência Física"
          description="Acompanhamento da rotina de musculação e cardio, fundamentais para aguentar tanto o desgaste físico quanto as longas sessões de trabalho mental focado."
          color="red"
        />
        <Card
          icon={<Zap className="text-amber-500" size={32} />}
          title="Preservação de Energia"
          description="Horários estritos para início e fim das operações diárias, evitando que o esgotamento reduza a qualidade do seu trabalho no dia seguinte."
          color="amber"
        />
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Rotina Diária</h3>
        <div className="space-y-4">
          <RoutineItem time="06:00" activity="Acordar e Higiene Pessoal" />
          <RoutineItem time="07:00" activity="Treino de Musculação" />
          <RoutineItem time="08:30" activity="Café da Manhã" />
          <RoutineItem time="09:00" activity="Início do Trabalho Focado" />
          <RoutineItem time="12:00" activity="Almoço e Descanso" />
          <RoutineItem time="13:00" activity="Retorno ao Trabalho" />
          <RoutineItem time="18:00" activity="Cardio Leve" />
          <RoutineItem time="19:00" activity="Jantar" />
          <RoutineItem time="20:00" activity="Estudo/Leitura" />
          <RoutineItem time="22:00" activity="Preparação para Dormir" />
          <RoutineItem time="23:00" activity="Sono" />
        </div>
      </div>
    </div>
  )
}

function Card({ icon, title, description, color }) {
  const colorClasses = {
    green: 'hover:border-green-500/50',
    yellow: 'hover:border-yellow-500/50',
    blue: 'hover:border-blue-500/50',
    purple: 'hover:border-purple-500/50',
    orange: 'hover:border-orange-500/50',
    cyan: 'hover:border-cyan-500/50',
    emerald: 'hover:border-emerald-500/50',
    pink: 'hover:border-pink-500/50',
    red: 'hover:border-red-500/50',
    amber: 'hover:border-amber-500/50',
    indigo: 'hover:border-indigo-500/50',
    teal: 'hover:border-teal-500/50',
    violet: 'hover:border-violet-500/50',
    rose: 'hover:border-rose-500/50',
    lime: 'hover:border-lime-500/50',
    fuchsia: 'hover:border-fuchsia-500/50',
  }

  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 transition-all hover:shadow-lg ${colorClasses[color] || ''}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function GoalItem({ title, progress }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300">{title}</span>
        <span className="text-slate-400">{progress}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

function RoutineItem({ time, activity }) {
  return (
    <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
      <span className="text-blue-400 font-mono text-sm w-16">{time}</span>
      <span className="text-slate-300">{activity}</span>
    </div>
  )
}

function RuleItem({ text }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg border-l-4 border-indigo-500">
      <Sparkles size={18} className="text-indigo-500 mt-0.5 flex-shrink-0" />
      <span className="text-slate-300 text-sm">{text}</span>
    </div>
  )
}

function ChecklistItem({ text }) {
  return (
    <div className="flex items-center gap-2 p-2 bg-slate-800/30 rounded-lg">
      <div className="w-4 h-4 border-2 border-slate-600 rounded flex-shrink-0" />
      <span className="text-slate-400 text-sm">{text}</span>
    </div>
  )
}

function EmergencyStep({ step, text }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-red-950/30 rounded-lg border-l-4 border-red-500">
      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs font-bold">{step}</span>
      </div>
      <span className="text-slate-300 text-sm">{text}</span>
    </div>
  )
}

function FixedPlace({ item, place }) {
  return (
    <div className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
      <Lock size={16} className="text-violet-500 flex-shrink-0" />
      <div className="flex-1">
        <span className="text-white text-sm font-medium">{item}</span>
        <span className="text-slate-400 text-sm ml-2">→</span>
        <span className="text-violet-400 text-sm ml-2">{place}</span>
      </div>
    </div>
  )
}

function WorkoutStep({ time, title, description }) {
  return (
    <div className="flex gap-4 p-4 bg-slate-800/50 rounded-lg">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-rose-500/20 rounded-lg flex items-center justify-center">
          <Timer size={20} className="text-rose-500" />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-rose-400 text-sm font-medium">{time}</span>
          <span className="text-slate-500 text-sm">•</span>
          <span className="text-white font-medium">{title}</span>
        </div>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  )
}

function WeeklyProgress({ day, focus, level }) {
  const levelColors = {
    'Iniciante': 'text-green-400',
    'Intermediário': 'text-yellow-400',
    'Avançado': 'text-orange-400',
    'Mestre': 'text-purple-400',
  }

  return (
    <div className="flex items-center gap-4 p-3 bg-slate-800/50 rounded-lg">
      <div className="w-24 flex-shrink-0">
        <span className="text-white font-medium">{day}</span>
      </div>
      <div className="flex-1">
        <span className="text-slate-300 text-sm">{focus}</span>
      </div>
      <div className="flex-shrink-0">
        <span className={`text-sm font-medium ${levelColors[level] || 'text-slate-400'}`}>{level}</span>
      </div>
    </div>
  )
}

export default App
