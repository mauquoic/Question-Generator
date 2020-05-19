import React, {useState} from 'react';
import './App.css';
import {Button} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from '@material-ui/lab/Alert';
import {useStyles} from "./styles";

function App() {
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [potentialQuestions, setPotentialQuestions] = useState<Array<Question>>(getQuestions);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const addQuestion = () => {
    if (potentialQuestions.length > 0) {
      let index = Math.floor(Math.random() * potentialQuestions.length);
      let chosenQuestion = potentialQuestions[index];
      setQuestions([chosenQuestion, ...questions]);
      setPotentialQuestions(potentialQuestions.filter(question => question.id !== chosenQuestion.id));
    } else {
      setOpen(true);
    }
  };

  const resetQuestions: () => void = () => {
    setQuestions([]);
    setPotentialQuestions(getQuestions());
  };

  return (
      <div className="App">
        <Grid container className={classes.root}>
          <Grid container spacing={1} item xs={12} justify="center">
            <Grid item xs={9} className={classes.title}>
              <h1>Bienvenue à l'examen de droit et progrès médical!</h1>
            </Grid>
          </Grid>
          {questions && questions.length > 0 ?
              <Grid container>
                {questions.map((question) =>
                    <Grid container item xs={12} direction="row" key={question.id} className={classes.row}>
                      <Grid item xs={12} alignItems="flex-end" >
                        {question.id}
                        {question.question}
                      </Grid>
                    </Grid>
                )}
              </Grid>
              : null
          }
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} className={classes.row}>
              <Button  color="primary" variant="contained" onClick={addQuestion}>
                Générer une question au hasard
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={resetQuestions}>
                Recommencer
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Snackbar
            anchorOrigin={{vertical: "top", horizontal: "right"}}
            autoHideDuration={3000}
            open={open}
            onClose={() => setOpen(false)}
        >
          <MuiAlert variant="filled" severity="error" onClose={() => setOpen(false)}>
            Toutes les questions ont déjà été choisies!
          </MuiAlert>
        </Snackbar>
      </div>
  );
}


interface Question {
  id: number;
  question: string;
}

const getQuestions: () => Array<Question> = () => {
  return [
    {
      id: 1,
      question: "Qu'est-ce le progrès?"
    },
    {
      id: 2,
      question: "Question 2"
    },
    {
      id: 3,
      question: "Question 3?"
    }
  ]
};

export default App;
