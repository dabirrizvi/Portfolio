exports.handler = async function (event, context) {
    const pdfPath = `${process.cwd()}/src/assets/cv.pdf`;
  
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=cv.pdf',
      },
      body: require('fs').readFileSync(pdfPath).toString('base64'),
      isBase64Encoded: true,
    };
  }; 
   