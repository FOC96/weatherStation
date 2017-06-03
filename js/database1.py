import pymysql;

def getConnection():
    # Database Variables
    db_host = '189.166.63.3'
    db_port = 3306
    db_user = 'Remote'
    db_password = 'maplew'
    db_charset = 'utf8'
    db_database = 'weatherstation'

    conn = pymysql.connect(host=db_host, port=db_port, user=db_user, passwd=db_password, db=db_database, charset=db_charset)
    return conn

def getLocal():
    # Database Variables
    db_host = '127.0.0.1'
    db_port = 3306
    db_user = 'root'
    db_password = ''
    db_charset = 'utf8'
    db_database = 'DL'

    conn = pymysql.connect(host=db_host, port=db_port, user=db_user, passwd=db_password, db=db_database, charset=db_charset)
    return conn

def checkDB():
    a = getLocal().cursor()

    a.execute("SELECT * FROM envdata ORDER BY id DESC;")
    a.close()

    rows = a.fetchall()

    return rows[0]


checkDB()
