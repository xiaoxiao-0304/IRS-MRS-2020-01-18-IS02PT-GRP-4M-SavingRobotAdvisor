import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {AccountBalance, CreditCard, MonetizationOn} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 275;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },

    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    form: {
        margin: theme.spacing(2),
    },
}));

const initialList = [
    {
        id: 'uob_one',
        bank: 'UOB',
        interest: 60,
        interest_rate: 2.1,
        cashback: 70,
    },
    {
        id: 'ocbc_360',
        bank: 'OCBC',
        interest: 70,
        interest_rate: 2.3,
        cashback: 80,
    },
];

function ResponsiveDrawer(props) {
    const [income, setIncome] = React.useState('');
    const [expense, setExpense] = React.useState('');
    const [savings, setSavings] = React.useState('');
    const [results, setResults] = React.useState(initialList);
    const [incomeError, setIncomeError] = React.useState('');
    const [expenseError, setExpenseError] = React.useState('');
    const [savingsError, setSavingsError] = React.useState('');

    const {container} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleIncomeChange = event => {
        if (event.target.value.length > 0) {
            setIncomeError("");
        } else {
            setIncomeError("true");
        }
        setIncome(event.target.value);
    };
    const handleExpenseChange = event => {
        if (event.target.value.length > 0) {
            setExpenseError("");
        } else {
            setExpenseError("true");
        }
        setExpense(event.target.value);
    };
    const handleSavingsChange = event => {
        if (event.target.value.length > 0) {
            setSavingsError("");
        } else {
            setSavingsError("true");
        }
        setSavings(event.target.value);
    };
    const compareProducts = event => {
        if (income && expense && savings) {
            setResults(results.concat({
                id: 'ocbc_360',
                bank: 'OCBC',
                interest: 70,
                interest_rate: 2.3,
                cashback: 80,
            }));
        }

        event.preventDefault();
    };

    const drawer = (

        <form className={classes.form} onSubmit={compareProducts} autoComplete="off">
            <Grid
                container
                spacing={16}
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.container}
            >
                <Grid item xs={12}>
                    <TextField
                        required
                        id="income"
                        label="Monthly net income"
                        margin={"normal"}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MonetizationOn/>
                                </InputAdornment>
                            ),
                        }}
                        error={incomeError}
                        value={income}
                        onChange={handleIncomeChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="expenses"
                        label="Monthly credit card expenses"
                        margin={"normal"}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <CreditCard/>
                                </InputAdornment>
                            ),
                        }}
                        error={expenseError}
                        value={expense}
                        onChange={handleExpenseChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="savings"
                        label="Cash Savings"
                        margin={"normal"}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBalance/>
                                </InputAdornment>
                            ),
                        }}
                        error={savingsError}
                        value={savings}
                        onChange={handleSavingsChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={compareProducts} variant="contained" color="primary">
                        Compare Banks
                    </Button>
                </Grid>
            </Grid>
        </form>

    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Bank Account Comparison Kit (BACK)
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Typography paragraph>
                    This tool will help you pick the bank account with the
                    <ul>
                        <li>highest interest rate</li>
                        <li>credit card cash rebates</li>
                    </ul>
                    based on your net salary, credit card expenses, and cash savings.
                </Typography>
                <ul>
                    {results.map(item => (
                        <li key={item.id}>
                            <div>Bank: {item.bank}</div>
                            <div>Combined: ${item.interest + item.cashback}</div>
                            <div>Savings interest: ${item.interest} ({item.interest_rate}%)</div>
                            <div>Credit cashback: ${item.cashback}</div>
                        </li>
                    ))}
                </ul>

            </main>
        </div>
    );
}

export default ResponsiveDrawer;
