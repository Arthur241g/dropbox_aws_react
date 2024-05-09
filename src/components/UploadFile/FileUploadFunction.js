import { Storage } from 'aws-amplify';

const uploadFile = async (file) => {
    try {
        // Utilise Storage.put pour uploader le fichier
        const result = await Storage.put(file.name, file, {
            contentType: file.type, // Spécifie le type de contenu (optionnel)
        });
        console.log('Fichier uploadé avec succès !', result);
    } catch (error) {
        console.error('Erreur lors de l\'upload du fichier :', error);
    }
};

/*const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        // Récupère le fichier depuis l'événement
        const file = event.arguments.file;
        const fileName = 'uploads/' + Date.now() + '_' + file.name;

        // Envoie le fichier vers S3
        await s3.putObject({
            Bucket: 'mon-bucket-s3',
            Key: fileName,
            Body: file.data,
        }).promise();

        return { success: true, message: 'Fichier uploadé avec succès !' };
    } catch (error) {
        console.error('Erreur lors de l\'upload du fichier :', error);
        return { success: false, message: 'Erreur lors de l\'upload du fichier.' };
    }
};*/