<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ImageBackgroundSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $merchants = DB::table('merchants')->pluck('user_id');

        foreach ($merchants as $userId) {
            // ✅ Use `storage_path()` for checking if folder exists
            $fullFolderPath = storage_path("app/public/photos/background/{$userId}/");
            if (!file_exists($fullFolderPath)) {
                dump("Folder does not exist: {$fullFolderPath}");
                continue; // Skip this user if folder is missing
            }

            // 🛠 Debug: List all files inside the folder
            $files = scandir($fullFolderPath);
            dump("Files found in {$fullFolderPath}:", $files);

            // Get up to 3 images from the folder
            $images = $this->getImagesFromFolder($fullFolderPath);

            // Assign images (use null if not available)
            $photo1 = $images[0] ?? null;
            $photo2 = $images[1] ?? null;
            $photo3 = $images[2] ?? null;

            // 🛠 Debug: Show what will be updated
            dump([
                'user_id' => $userId,
                'photo1' => $photo1,
                'photo2' => $photo2,
                'photo3' => $photo3
            ]);

            // Update only if at least one image exists
            if ($photo1 || $photo2 || $photo3) {
                DB::table('merchants')->where('user_id', $userId)->update([
                    'photo1' => $photo1,
                    'photo2' => $photo2,
                    'photo3' => $photo3,
                ]);
            }
        }
    }

    /**
     * Get up to 3 image files from a folder.
     */
    private function getImagesFromFolder($folderPath)
    {
        $files = scandir($folderPath);
        $imageFiles = [];

        foreach ($files as $file) {
            if (preg_match('/\.(jpg|jpeg|png|tiff)$/i', $file)) {
                // 🛠 Debug: Show found image
                dump("Found image: {$file}");

                $imageFiles[] = "photos/background/" . basename($folderPath) . "/{$file}";
            }
        }

        return array_slice($imageFiles, 0, 3);
    }
}
