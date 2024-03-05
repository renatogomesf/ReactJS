export default class BaseClasse extends React.Component{
    constructor(props){
        // para permitir o uso de props
        super(props)

        // state
        this.state={
            canal:'cfb curso',
            curso:'react',
            ativo:true,

            // usando props vinda de outro componente
            nome:this.props.nomeAluno
        }

        // usando props vinda de outro componente
        this.status=this.props.status

        // com o bind, em vez de chamar "this.ativarDesativar()", eu posso associar essa função a uma variável e chamar a variável "this.ad". essa variável vai chamar a função.
        let ad = ativarDesativar.bind(this)
    }

    // função para manipular o state
    ativarDesativar(){
        this.setState(
            (state)=>({
                ativo:!state.ativo
            })
        )
    }

    
    componentDidMount(){
        console.log('foi criado')
    }

    componentDidUpdate(){
        console.log('foi atualizado')
    }

    componentWillUnmount(){
        console.log('foi removido')
    }

    render(){
        return(
            <>
                <h1>componente de classe</h1>

                {/* chamada da função com bind */}
                <button onClick={this.ad}>Ativar/Desativar</button>

                {/* chamada da função SEM bind */}
                <button onClick={()=>this.ativarDesativar()}>Ativar/Desativar</button>
            </>
        )
    }
}