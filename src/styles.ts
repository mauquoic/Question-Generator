import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(2),
      },
      title: {
        paddingBottom: theme.spacing(3)
      },
      row: {
        paddingBottom: theme.spacing(1)
      },
    }),
);