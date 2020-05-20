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
  const title = "Bienvenue à l'examen de droit et progrès médical!";

  const addQuestion = () => {
    if (questions.length < 2) {    // ici: changer le nombre maximal de questions
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
              <h1>{title}</h1>
            </Grid>
          </Grid>
          {questions && questions.length > 0 ?
              <Grid container justify="center">
                {questions.map((question) =>
                    <Grid container item xs={8} direction="row" key={question.id} className={classes.row}>
                      <Grid item xs={12} alignItems="flex-end" style={{fontSize: 20}}>
                        {question.id}. {question.question}
                      </Grid>
                    </Grid>
                )}
              </Grid>
              : null
          }
          <Grid container item xs={12} justify="center">
            <Grid item xs={12} className={classes.row}>
              <Button color="primary" variant="contained" onClick={addQuestion}>
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
            Vous êtes au maximum des questions!
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
      question: "Comment définit-on le « progrès médical » ? Est-ce qu’il est nécessairement positif ? Expliquez la relation entre validation d’une pratique médicale et progrès médical."
    },
    {
      id: 2,
      question: "Quelles sont les différences entre la recherche et la pratique médicale ? Jusqu’où le consentement libre et éclairé d’un patient/volontaire participant à un essai clinique peut-il être pris en compte dans l’intérêt de la recherche tout en respectant les droits inhérents à la personnalité ?"
    },
    {
      id: 3,
      question: "Pourquoi est-ce qu’on ne devrait pas opposer le droit à l’éthique ? Pourquoi apprendre l’éthique et la règlementation de la recherche ?"
    },
    {
      id: 4,
      question: "Comment le droit gère-t-il les risques liés au champ de tension entre l’application de la recherche et l’intérêt de la sécurité des êtres humains ?"
    },
    {
      id: 5,
      question: "A quelles conditions les directives d’une association privée peuvent-elles avoir force de loi en droit suisse ? Pourquoi est-ce important pour la recherche impliquant l’être humain ?"
    },
    {
      id: 6,
      question: "Face à une expérimentation sur animaux, quels sont les intérêts dont il faut faire la balance et pourquoi doit-on faire cette pesée des intérêts ? Quels sont les critères d’évaluation du caractère indispensable des expériences causant des contraintes aux animaux ?"
    },
    {
      id: 7,
      question: "Présentez les 3R de l’éthique de l’expérimentation animale : remplacer, raffiner, réduire. Est-ce uniquement un concept éthique ?"
    },
    {
      id: 8,
      question: "Afin de trouver un moyen de prévention contre une maladie, un groupe de chercheurs envisagent de faire une expérimentation animale, dans laquelle l'animal subira des douleurs considérables. Quelles sont les démarches que ce groupe doit suivre afin de pouvoir commencer l'expérimentation? Qui donnera l'autorisation?"
    },
    {
      id: 9,
      question: "La gestion du corps appartient-elle à l’individu ou à l’Etat ? Qu’en est-il du matériel biologique  ? Doit-il être considéré comme une chose ou comme un bien de la personnalité ? Quel droit prime entre celui du propriétaire et celui de la personne source ? Comment arbitrer les conflits de volonté?"
    },
    {
      id: 10,
      question: "Quelles sont les recherches qui ne relèvent pas du champ d’application de la LRH ? Quelle protection est garantie aux personnes qui y participent ?"
    },
    {
      id: 11,
      question: "Dans le cadre de la recherche impliquant des êtres humains, on parle de rapport « favorable » entre les risques et les bénéfices. Veuillez préciser cette règle en vous fondant sur la LRH."
    },
    {
      id: 12,
      question: "Un homme est volontaire dans une étude de phase I d’un nouvel antibiotique. Le formulaire de consentement ne mentionnait pas la probabilité de risques graves. Suite à une première injection au niveau de la cuisse il constate une grosse inflammation de sa jambe. Il se rend alors chez son médecin qui lui confirme qu'en réalité il a une infection si grave, due à cette injection, qu'il n'y a pas d'autre moyen que d'amputer la jambe pour éviter la gangrène. Quid iuris?"
    },
    {
      id: 13,
      question: "Le consentement individuel est requis en droit suisse pour effectuer une recherche. Dans quelle mesure est-il aussi nécessaire d’obtenir l’accord de la communauté à laquelle appartiennent les participants potentiels ? Cette problématique est-elle propre aux pays en développement ? Quelle différence entre cette problématique et celle concernant les mineurs et les personnes incapables de discernement ?"
    },
    {
      id: 14,
      question: "Quelle est l’utilité d’un formulaire de consentement dans une étude ? Est-il utilisé pour permettre aux participants d’avoir toutes les informations sur l’étude avant le commencement ou simplement pour que les chercheurs se déchargent de leur responsabilité ?"
    },
    {
      id: 15,
      question: "Comment peut-on définir une personne vulnérable ? Le sommes-nous ? Est-ce que les recherches peuvent inclure des personnes vulnérables ?"
    },
    {
      id: 16,
      question: "Comment qualifier la relation entre le chercheur et le participant ? Pourquoi cette qualification est complexe ? En quoi les règles de responsabilité prévues dans la LRH limitent le pouvoir d’action des participants ? Quel mécanisme permet de pallier à ce manquement de protection  ?"
    },
    {
      id: 17,
      question: "Enumérez et commentez les enjeux et problématiques posés par l'anonymisation des échantillons et des données stockées au sein des biobanques. Quelles sont les règles qui s’appliquent en la matière ?"
    },
    {
      id: 18,
      question: "Qu’est-ce qu’une biobanque ? Quelles sont les principales exigences éthiques et juridiques liées à la création et l’exploitation d’une biobanque ? En quoi la réglementation des biobanques se distinguent de celle de la recherche avec du matériel biologique humain ?"
    },
    {
      id: 19,
      question: "Une biobanque vend la transmission des données personnelles qu’elle a collectées au plus offrant en assurant à l’acquéreur que le consentement du titulaire des données a été obtenu. Un titulaire s’aperçoit que ces données ont été vendues et exploités sans son consentement. Que peut-il faire ?"
    },
    {
      id: 20,
      question: "Admettons qu'un échantillon biologique d'une biobanque subisse des analyses non désirées par le patient. Le patient doit-il en être informé? Que se passe-t-il si cet échantillon est testé positif pour une maladie grave? Cela change-t-il quelque chose d'un point de vue éthique si la maladie est incurable?"
    },
    {
      id: 21,
      question: "Expliquer l’évolution de la création des commissions d’éthique. Dans l’évolution de la création des commissions d’éthique quelles sont les conditions qui se sont imposées par rapport à leur composition ?"
    },
    {
      id: 22,
      question: "Des essais cliniques sur l'efficacité d'un médicament nouvellement découvert se déroulent sur le site de l’hôpital Pourtalès à Neuchâtel. Un accord a été passé entre l’entreprise pharmaceutique à la base du projet de recherche et l’Hôpital Neuchâtelois. Ce-dernier stipule que la première s’engage, après avoir reçu l’autorisation de mise sur le marché, à mettre à disposition de l’Hôpital Neuchâtelois à un prix nettement préférentiel, 100 boites du médicament par participants recrutés. Vous êtes membre de la commission d’éthique chargée d’évaluer ce projet de recherche. Quelle est votre argumentation ? Votre réponse serait-elle différente si la commission se trouve aux USA ou en Afrique du Sud?"
    },
    {
      id: 23,
      question: "Un psychologue installé en suisse associé à un médecin français souhaite entreprendre un projet de recherche visant à étudier les effets physiologiques des grossesses à répétition sur les femmes utilisées comme mères porteuses ainsi que les effets psychologiques d’un tel mode de vie. Le médecin demande à son associé de requérir l’avis d’une commission d’éthique, mais ce dernier prétend que cela n’est pas nécessaire vu que les recherches psychologiques ne sont pas soumises à de telles règles. Comme l’étude se fait en Ukraine, le médecin accepte de commencer l’étude sans l’avis d’une commission d’éthique. Qu’en est-il ?"
    },
    {
      id: 24,
      question: "Au début de l’épidémie Covid-19, un hôpital souhaite obtenir une autorisation pour les recherches sans consentement des patients testés positifs au Covid-19. Il dépose une demande auprès de la commission d’éthique de la recherche compétente pour tous les projets liés au Covid-19 sans consentement. Que répondez vous en tant que président de la commission d’éthique compétente à l’hôpital ?"
    },
    {
      id: 25,
      question: "Comment définir un conflit d’intérêt et quels sont les mécanismes pour lutter contre ? Ces derniers sont-ils suffisants en matière de recherche médicale ?"
    }

  ]
};

export default App;
