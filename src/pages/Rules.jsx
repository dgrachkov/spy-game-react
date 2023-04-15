import { Link } from 'react-router-dom'

const Rules = () => {
  return (
    <div className='h-full'>
      <div className="max-w-3xl mx-auto px-3 py-12">
        <div>
          <h1 className="text-slate-100 font-medium text-2xl text-center">Правила игры</h1>
          <p className="mt-2 text-slate-100 text-base font-light text-center">
            Задача каждого участника в игре — не раскрыть свою роль до конца раунда или первым раскрыть локацию других игроков. 
            Играть можно в компании от трех человек, но лучше всего подойдет для компании из большего количества участников.
          </p>
          <p className="mt-2 text-slate-100 text-base font-light text-center">
            Игра состоит из нескольких коротких раундов, в каждом из которых участники оказываются на локации и с личным статусом. 
            Один из игроков оказывается шпионом без определенного места нахождения. 
            Его цель угадать локацию, то есть ему нужно расспросить остальных игроков и раскрыть место нахождения, не раскрыв статус.
            Каждый обычный игрок должен дать понять остальным, что он в курсе того, где находится, а значит не является шпионом.
          </p>
          <p className="mt-2 text-slate-100 text-base font-light text-center">
          Ответ игрока также может быть любым, а уточнять вопрос нельзя. После этого ход переходит ответившему игроку и он также задает вопрос любому из участников.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to='/' className='mt-7 text-center m-auto block text-lg bg-zinc-700 text-slate-100 px-5 py-3 rounded-md font-medium duration-300 hover:bg-zinc-600'>
            Понятно
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rules