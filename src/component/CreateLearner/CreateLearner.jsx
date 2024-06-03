function CreateLearner({ addLearner }) {
  
    const newLearner = {
      name: "Creola Katherine Johnson",
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2020-9-1',
          score: 100
        },
        {
            date: '2000-10-1',
            score: 200
          },
      ]
    };
  
    return (
      <div>
        <button onClick={() => addLearner(newLearner)}>Create</button>
      </div>
    );
  }
  
  export default CreateLearner;