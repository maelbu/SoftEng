<html>

  <head>
    <link rel="stylesheet" href="maze.css">
  </head>

<body>
  <canvas id="canvas" width="200" height="120" style="border: 1px solid #000"></canvas>

  <script>

public class arrayAttempt1 {
	static int i=0;
	static  int j=0;
	static int[][] array = new int[i][j];
	static int row = 0;
	static int col = 0;
	 static int movement ;
	static char PATH_BLOCK = '\u2591';
	final static char BLOCK = '\u2593';
	final static  char EXIT = 'X';
	static char character = '*';

	 static int playerRow = 0;
		static int playerCol = 0;
static	int complete = ('0');
static int up=0,u=0;
static int down=0,d=0;
static int left=0,l=0;
static int right=0,r=0;
//_________________________________________________________________________________________
		public static void main(String[] args) {
			menu();
		}
			public static void menu(){
			TextIO.putln("press 1 to play game");
			TextIO.putln("press 2 to cancel");
			TextIO.putln("press 3 to view instructions");
			int f=1;
			int choice1 = TextIO.getlnInt();
			 if  (choice1 == f)
				 maze();
			 move();
			 if(choice1== 2)
					System.exit(0);
			 if (choice1 == 3) instructions();

		}

		//____________________________________________________________________________________
		public static void instructions(){
			TextIO.putln("8 = up");
			TextIO.putln("2 = down");
			TextIO.putln("4 = left");
			TextIO.putln("6 = right");
			TextIO.putln("Press 1 to return to main menu any other key to exit");
			int choice2 = TextIO.getlnInt();
			if (choice2 == 1) menu();
			else System.exit(EXIT);

		}

		//____________________________________________________________________________________
			public static void maze(){

						TextIO.readFile("sample_maze.txt");

			int rows = TextIO.getInt();
			int cols = TextIO.getlnInt();
			int[][] array = new int[rows][cols];

			for (int i=0; i < rows; i++) {
				for (int j=0; j < cols; j++) {
					array[i][j] = TextIO.getChar();
				}
				TextIO.getln();
			}
			TextIO.readStandardInput();

			for (int i=0; i < rows; i++) {
                for (int j=0; j < cols; j++) {
                    if (array[i][j]=='0') TextIO.putf("%c", BLOCK);
					if (i==playerRow && j==playerCol) TextIO.put(character);
                    else
                         if (array[i][j]=='1') TextIO.putf("%c", PATH_BLOCK);
                    if (array[i][j]=='3') TextIO.put(EXIT);


                }
                     TextIO.putln();
                     }
			}
			public static void move(){
			TextIO.putln("move please");

						char moves =TextIO.getChar();

					    if (moves == 8) TextIO.put(character);

						playerRow++;
						if ( moves == 2) TextIO.put(character);

						playerRow--;
						if ( moves == 4) TextIO.put(character);
						playerCol--;
						if ( moves == 6) TextIO.put(character);
						playerCol++;

					 	if ('3'== array[24][36])complete++;
						if (complete =='1')TextIO.putln("congratulations");


							}


			}
