"use client"

import Image from "next/image"
import {
  Phone,
  Mail,
  Instagram,
  ArrowRight,
  CheckCircle,
  Calendar,
  Shield,
  TrendingUp,
  FileText,
  Star,
  Quote,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="relative h-14 w-64">
            <Image src="/images/logo.png" alt="Ferraz Contabilidade" fill className="object-contain" priority />
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#servicos" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Serviços
            </a>
            <a href="#numeros" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Nossos Números
            </a>
            <a href="#depoimentos" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Depoimentos
            </a>
            <a href="#diferenciais" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Segmentos
            </a>
            <a href="#sobre" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-[#c6a44c] transition-colors">
              Contato
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-medium">Fale Conosco</span>
              <span className="text-[#c6a44c] font-bold">11 99701-8328</span>
            </div>
            <Button
              className="bg-[#c6a44c] hover:bg-[#b08e3a] shadow-md"
              onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
            >
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
          <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 max-w-xl">
                <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                  Excelência em Contabilidade
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Transforme sua <span className="text-[#c6a44c]">gestão contábil</span> e potencialize resultados
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Liberte-se da burocracia fiscal e concentre-se no crescimento do seu negócio. Oferecemos soluções
                  contábeis estratégicas que vão além dos números, a partir de{" "}
                  <span className="font-bold text-[#c6a44c]">R$100,00</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#c6a44c] hover:bg-[#b08e3a] text-white shadow-lg h-12 px-6 rounded-md"
                    onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                  >
                    Consultoria Gratuita
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#c6a44c] text-[#c6a44c] hover:bg-[#c6a44c]/10 h-12 px-6 rounded-md"
                    onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                  >
                    Conhecer Serviços <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="font-bold">+200 empresas</span> confiam em nossa expertise contábil
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md transform transition-all hover:scale-105 duration-500">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 border border-gray-100">
                    <div className="relative h-64 w-full mb-6">
                      <Image
                        src="/images/business-card.jpeg"
                        alt="Cartão de Visita Ferraz Contabilidade"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">Ferraz Contabilidade</h3>
                      <p className="text-gray-600">Soluções contábeis personalizadas para o sucesso do seu negócio</p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#c6a44c]" />
                          <span className="text-sm text-gray-600">11 99701-8328</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-[#c6a44c] border-[#c6a44c]"
                          onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                        >
                          Contato
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-[#c6a44c]/10 rounded-full z-[-1]"></div>
                  <div className="absolute -top-4 -left-4 h-16 w-16 bg-[#c6a44c]/10 rounded-full z-[-1]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-[#c6a44c]">+10</div>
                <p className="text-sm text-gray-600">Anos de Experiência</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-[#c6a44c]">+200</div>
                <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-[#c6a44c]">100%</div>
                <p className="text-sm text-gray-600">Conformidade Fiscal</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="text-3xl font-bold text-[#c6a44c]">24/7</div>
                <p className="text-sm text-gray-600">Suporte ao Cliente</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Números Section */}
        <section id="numeros" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                Nossos Números
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Transformamos Resultados
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Veja como nossos clientes transformaram seus negócios após implementarem nossas soluções contábeis
                estratégicas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Antes - Declínio */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-red-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Antes da Ferraz Contabilidade</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-500">+32%</p>
                    <p className="text-gray-600">Carga Tributária Excessiva</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-500">68%</p>
                    <p className="text-gray-600">Empresas com Multas Fiscais</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-500">45%</p>
                    <p className="text-gray-600">Tempo Gasto com Burocracia</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-red-500">-27%</p>
                    <p className="text-gray-600">Queda na Lucratividade</p>
                  </div>
                </div>
              </div>

              {/* Depois - Crescimento */}
              <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Com a Ferraz Contabilidade</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-500">-22%</p>
                    <p className="text-gray-600">Redução na Carga Tributária</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-500">98%</p>
                    <p className="text-gray-600">Conformidade Fiscal Total</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-500">+75%</p>
                    <p className="text-gray-600">Tempo Focado no Negócio</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-green-500">+35%</p>
                    <p className="text-gray-600">Aumento na Lucratividade</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Estes números representam a média de resultados obtidos por nossos clientes após 12 meses de
                implementação das nossas soluções contábeis estratégicas.
              </p>
              <Button
                className="bg-[#c6a44c] hover:bg-[#b08e3a] shadow-md"
                onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
              >
                Quero Transformar Meu Negócio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                Nossos Serviços
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Soluções Contábeis Estratégicas
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Oferecemos serviços especializados para MEI, LTDA, ME, EPP, PJ e PF com atendimento personalizado e foco
                em resultados
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Abertura e Alteração de Empresas",
                  description:
                    "Formalize seu negócio com segurança jurídica. Cuidamos de toda a burocracia para abertura, alteração ou encerramento da sua empresa com agilidade e precisão.",
                  icon: <FileText className="h-10 w-10 text-[#c6a44c]" />,
                },
                {
                  title: "Planejamento Tributário Estratégico",
                  description:
                    "Reduza legalmente sua carga tributária. Desenvolvemos estratégias personalizadas para SIMEI, Simples Nacional e Lucro Presumido, maximizando sua economia fiscal.",
                  icon: <TrendingUp className="h-10 w-10 text-[#c6a44c]" />,
                },
                {
                  title: "Gestão de Folha de Pagamento",
                  description:
                    "Administração completa e precisa da sua folha de pagamento, incluindo admissões, férias, 13º salário, rescisões e obrigações acessórias trabalhistas.",
                  icon: <Calendar className="h-10 w-10 text-[#c6a44c]" />,
                },
                {
                  title: "Contabilidade Fiscal Completa",
                  description:
                    "Mantenha sua empresa em conformidade com a legislação. Realizamos apuração mensal e anual de impostos, além de acompanhamento fiscal preventivo.",
                  icon: <Shield className="h-10 w-10 text-[#c6a44c]" />,
                },
                {
                  title: "Cálculo Judicial Trabalhista e Cível",
                  description:
                    "Análise técnica e elaboração de cálculos judiciais trabalhistas e cíveis com precisão e fundamentação legal, garantindo segurança jurídica para sua empresa.",
                  icon: <FileText className="h-10 w-10 text-[#c6a44c]" />,
                },
                {
                  title: "Declaração de Imposto de Renda",
                  description:
                    "Elaboração estratégica da sua declaração de Imposto de Renda Pessoa Física e Jurídica, identificando oportunidades de dedução e maximizando sua restituição.",
                  icon: <Shield className="h-10 w-10 text-[#c6a44c]" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#c6a44c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <div className="mt-4 pt-4 border-t">
                    <a
                      href="https://wa.me/5511997018328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#c6a44c] font-medium hover:underline"
                    >
                      Solicitar informações <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="rounded-xl bg-gradient-to-r from-[#c6a44c]/20 to-[#c6a44c]/5 p-8 text-center max-w-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">Investimento Acessível</h3>
                <p className="mt-2 text-gray-600 mb-4">Serviços contábeis de excelência a partir de</p>
                <p className="mt-1 text-4xl font-bold text-[#c6a44c] mb-6">R$100,00</p>
                <Button
                  size="lg"
                  className="bg-[#c6a44c] hover:bg-[#b08e3a] shadow-md"
                  onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                >
                  Solicitar Proposta Personalizada <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                Depoimentos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Conheça a experiência de quem já transformou sua gestão contábil com a Ferraz Contabilidade
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Silva",
                  company: "Silva & Associados",
                  testimonial:
                    "A Ferraz Contabilidade transformou completamente a gestão fiscal da minha empresa. Conseguimos reduzir nossa carga tributária em 22% no primeiro ano de parceria, mantendo total conformidade com a legislação.",
                  rating: 5,
                },
                {
                  name: "Mariana Costa",
                  company: "MC Arquitetura",
                  testimonial:
                    "Como profissional autônoma, sempre tive dificuldades com a parte contábil. A equipe da Ferraz me orientou na melhor forma de tributação e agora posso focar no meu trabalho enquanto eles cuidam de toda a burocracia.",
                  rating: 5,
                },
                {
                  name: "Roberto Mendes",
                  company: "RM Tecnologia",
                  testimonial:
                    "Atendimento excepcional e altamente profissional. Nos momentos mais críticos, como no fechamento fiscal, a equipe da Ferraz sempre esteve disponível para resolver nossas questões com agilidade e precisão.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm relative">
                  <Quote className="h-10 w-10 text-[#c6a44c]/20 absolute top-4 right-4" />
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-[#c6a44c] fill-[#c6a44c]" />
                        ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.testimonial}"</p>
                    <div className="mt-auto">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                variant="outline"
                className="border-[#c6a44c] text-[#c6a44c] hover:bg-[#c6a44c]/10"
                onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
              >
                Ver Mais Depoimentos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Segmentos Atendidos Section */}
        <section id="diferenciais" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                Segmentos Atendidos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Especialistas em Diversos Segmentos
              </h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Oferecemos soluções contábeis personalizadas para diferentes áreas de atuação, com conhecimento
                específico para cada segmento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Comércio",
                  description:
                    "Soluções específicas para empresas de varejo e atacado, com foco em controle de estoque e tributação de mercadorias.",
                  icon: <TrendingUp className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Prestação de Serviço",
                  description:
                    "Atendimento especializado para empresas prestadoras de serviços, com planejamento tributário otimizado para este segmento.",
                  icon: <FileText className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Indústria",
                  description:
                    "Gestão contábil completa para indústrias, com controle de custos de produção e apuração de impostos específicos.",
                  icon: <TrendingUp className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Dentistas",
                  description:
                    "Contabilidade especializada para consultórios odontológicos, com foco em redução da carga tributária para profissionais da área.",
                  icon: <Shield className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Psicólogos",
                  description:
                    "Soluções contábeis para clínicas e consultórios de psicologia, com orientação para a melhor forma de tributação.",
                  icon: <Shield className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Advogados",
                  description:
                    "Contabilidade para escritórios de advocacia, com gestão financeira e tributária específica para a área jurídica.",
                  icon: <FileText className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Prestação de Contas Partido Político",
                  description:
                    "Expertise em prestação de contas para partidos políticos, garantindo conformidade com as exigências legais e transparência.",
                  icon: <CheckCircle className="h-6 w-6 text-[#c6a44c]" />,
                },
                {
                  title: "Licitação",
                  description:
                    "Suporte contábil completo para empresas que participam de licitações, com preparação de documentação e análise de viabilidade.",
                  icon: <CheckCircle className="h-6 w-6 text-[#c6a44c]" />,
                },
              ].map((segment, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-[#c6a44c]/20 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a44c]/10">
                      {segment.icon}
                    </div>
                    <h3 className="text-xl font-bold">{segment.title}</h3>
                  </div>
                  <p className="text-gray-600">{segment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#c6a44c]/10">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                  Pronto para transformar a saúde financeira do seu negócio?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Agende uma consultoria gratuita e descubra como nossa expertise contábil pode impulsionar seus
                  resultados, reduzir custos e eliminar preocupações fiscais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#c6a44c] hover:bg-[#b08e3a] shadow-md"
                    onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                  >
                    Agendar Consultoria Gratuita
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#c6a44c] text-[#c6a44c] hover:bg-[#c6a44c]/10"
                    onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                  >
                    Conhecer Mais Serviços
                  </Button>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Solicite um contato</h3>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.open("https://wa.me/5511997018328", "_blank")
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Telefone
                      </label>
                      <input
                        id="phone"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                        placeholder="Seu telefone"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                      placeholder="Seu email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="abertura">Abertura de Empresa</option>
                      <option value="contabilidade">Contabilidade Mensal</option>
                      <option value="fiscal">Planejamento Tributário</option>
                      <option value="folha">Folha de Pagamento</option>
                      <option value="ir">Imposto de Renda</option>
                      <option value="outros">Outros Serviços</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full bg-[#c6a44c] hover:bg-[#b08e3a]">
                    Solicitar Contato
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm mb-4">
                  Sobre Nós
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                  Ferraz Contabilidade: Parceria Estratégica para o Sucesso
                </h2>
                <p className="text-gray-600 mb-6">
                  Há mais de uma década, a Ferraz Contabilidade tem sido parceira estratégica de empresas de todos os
                  portes. Nossa missão vai além da contabilidade tradicional – buscamos compreender profundamente o seu
                  negócio para oferecer soluções que impulsionem resultados concretos.
                </p>
                <p className="text-gray-600 mb-6">
                  Combinamos expertise técnica com visão estratégica para transformar dados contábeis em informações
                  valiosas para a tomada de decisões. Nossa abordagem consultiva garante que você tenha não apenas
                  conformidade fiscal, mas também insights que potencializam o crescimento do seu negócio.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a44c]/10">
                      <CheckCircle className="h-6 w-6 text-[#c6a44c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Profissionais Certificados</h3>
                      <p className="text-sm text-gray-600">Equipe com formação superior e certificações técnicas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a44c]/10">
                      <CheckCircle className="h-6 w-6 text-[#c6a44c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Metodologia Exclusiva</h3>
                      <p className="text-sm text-gray-600">Processos desenvolvidos para maximizar resultados</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a44c]/10">
                      <CheckCircle className="h-6 w-6 text-[#c6a44c]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Compromisso com Excelência</h3>
                      <p className="text-sm text-gray-600">Busca constante por aprimoramento e inovação</p>
                    </div>
                  </div>
                </div>
                <Button
                  className="bg-[#c6a44c] hover:bg-[#b08e3a]"
                  onClick={() => window.open("https://wa.me/5511997018328", "_blank")}
                >
                  Conheça Nossa História
                </Button>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative h-[400px] w-[400px] rounded-xl overflow-hidden bg-[#c6a44c]/5 flex items-center justify-center shadow-md">
                  <div className="relative h-48 w-48">
                    <Image src="/images/logo.png" alt="Ferraz Contabilidade" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="bg-[#c6a44c]/10 text-[#c6a44c] hover:bg-[#c6a44c]/20 px-3 py-1 text-sm">
                Fale Conosco
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Entre em Contato</h2>
              <p className="max-w-[700px] text-gray-600 md:text-lg">
                Estamos prontos para atender você e esclarecer todas as suas dúvidas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#c6a44c]/10 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-[#c6a44c]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telefone</h3>
                <p className="text-gray-600 mb-2">11 99701-8328</p>
                <p className="text-gray-600">11 95947-5763</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#c6a44c]/10 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-[#c6a44c]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 break-all">contato@diogoferraz-contador.com.br</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-[#c6a44c]/10 flex items-center justify-center mb-4">
                  <Instagram className="h-8 w-8 text-[#c6a44c]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instagram</h3>
                <p className="text-gray-600">@dtferrazcontabilidade</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-center">Envie uma mensagem</h3>
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.open("https://wa.me/5511997018328", "_blank")
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-sm font-medium">
                      Nome Completo
                    </label>
                    <input
                      id="full-name"
                      className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email-address" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                      placeholder="Seu email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone-number" className="text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      id="phone-number"
                      type="tel"
                      className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                      placeholder="Seu telefone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Empresa
                    </label>
                    <input
                      id="company"
                      className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[120px] w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#c6a44c]"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#c6a44c] hover:bg-[#b08e3a]">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="relative h-16 w-64">
                <Image
                  src="/images/logo.png"
                  alt="Ferraz Contabilidade"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Soluções contábeis estratégicas para impulsionar o crescimento do seu negócio.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/5511997018328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/5511997018328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Abertura de Empresas
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511997018328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Contabilidade Fiscal
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511997018328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Planejamento Tributário
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511997018328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Folha de Pagamento
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511997018328"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Imposto de Renda
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#servicos" className="text-gray-400 hover:text-white text-sm">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-gray-400 hover:text-white text-sm">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-gray-400 hover:text-white text-sm">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>
                    11 99701-8328
                    <br />
                    11 95947-5763
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>contato@diogoferraz-contador.com.br</span>
                </li>
                <li className="flex items-start gap-2 text-gray-400 text-sm">
                  <Instagram className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>@dtferrazcontabilidade</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Ferraz Contabilidade. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
